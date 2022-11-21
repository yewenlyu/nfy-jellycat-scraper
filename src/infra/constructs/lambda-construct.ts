import { Duration } from 'aws-cdk-lib';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Role, ServicePrincipal, ManagedPolicy } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

import path from 'path';

type LambdaConstructProps = {
    readonly snsTopicArn: string
};

export default class LambdaConstruct extends Construct {
    readonly lambdaFunction: Function;

    constructor(scope: Construct, id: string, props: LambdaConstructProps) {
        super(scope, id);

        const lambdaExecutionRole = new Role(this, 'NFYWebScraperExecutionRole', {
            assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
                ManagedPolicy.fromAwsManagedPolicyName('AmazonSNSFullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('CloudWatchEventsFullAccess')
            ]
        });

        this.lambdaFunction = new NodejsFunction(this, 'NFYWebScraperFunction', {
            functionName: 'NFYWebScraperFunction',
            entry: path.join(__dirname, '../../lambda.ts'),
            handler: 'lambdaHandler',
            runtime: Runtime.NODEJS_16_X,
            description: "Lambda function with web scraper implementation, invoked periodically by CloudWatch Eventbridge.",
            timeout: Duration.minutes(5),
            logRetention: RetentionDays.FIVE_DAYS,
            role: lambdaExecutionRole,
            environment: {
                TOPIC_ARN: props.snsTopicArn
            }
        });
    }
}
