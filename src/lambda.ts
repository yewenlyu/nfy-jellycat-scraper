import { Context, ScheduledEvent } from "aws-lambda";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { ProductAvailabilityData, REPOSITORY_URL } from "./const";
import JellyCatScraper from "./scraper";

export const lambdaHandler = async (event: ScheduledEvent, context: Context): Promise<any> => {
    console.log(`ENVIRONMENT VARIABLES: ${JSON.stringify(process.env, null, 2)}`)
    console.log(`Recieved Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Recieved Context: ${JSON.stringify(context, null, 2)}`);

    const application = new JellyCatScraper();

    // Runtime error info and stack will be passed to AWS Lambda without handling
    console.log("Running scrapper")
    const availableProductList = await application.run();

    if (availableProductList.length === 0) {
        return NONE_AVAILABLE_RESPONSE;
    }

    const snsClient = new SNSClient({ region: 'us-west-1' });
    const availabilityNotificationMessage = generateMessage(availableProductList);

    // SNS client error will be passed to AWS Lambda without handling
    console.log("One or more check list product is available. Pulishing to SNS Topic ARN: [%s]\n With message:\n %s",
        process.env.TOPIC_ARN, availabilityNotificationMessage);
    const snsPublishPromiseResponse = await snsClient.send(new PublishCommand({
        Message: availabilityNotificationMessage,
        TopicArn: process.env.TOPIC_ARN
    }));

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "One or more check lists product is available. Notification sent to SNS topic.",
            response: snsPublishPromiseResponse
        })
    }
}

const generateMessage = (availableProductList: ProductAvailabilityData[]): string => {
    const availableProductListString = availableProductList.map(availableProduct =>
        `${availableProduct.productName}: ${availableProduct.url}`).join('\n');

    return `Hi from Wenlyu,\n\n
    One or more of your watch-listed product is now in stock on JellyCat.com!\n
    Please proceed to the following link(s) to check:\n\n
    ${availableProductListString}\n\n
    Supported by: ${REPOSITORY_URL}`;
}

const NONE_AVAILABLE_RESPONSE = {
    statusCode: 200,
    body: JSON.stringify({
        message: "None of the check list products are available, Lambda executed successfully."
    })
}
