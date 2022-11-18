import { Context, ScheduledEvent } from "aws-lambda";
import { INFO_TAG } from "./const";

export const lambdaHandler = async (event: ScheduledEvent, context: Context, callback: () => Promise<any>) => {
    console.log(INFO_TAG + `Recieved Event: ${JSON.stringify(event, null, 2)}`);
    console.log(INFO_TAG + `Recieved Context: ${JSON.stringify(event, null, 2)}`);
}
