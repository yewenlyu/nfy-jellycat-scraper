import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import SNSConstruct from './constructs/sns-construct';
import LambdaConstruct from './constructs/lambda-construct';
import EventBridgeConstruct from './constructs/event-bridge-construct';

export default class InfraStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const snsConstruct = new SNSConstruct(this, 'SNSConstruct');
        const lambdaConstruct = new LambdaConstruct(this, 'LambdaConstruct', { snsTopicArn: snsConstruct.snsTopic.topicArn });
        const eventbridgeConstruct = new EventBridgeConstruct(this, 'EventBridgeConstruct', {
            lambdaFunction: lambdaConstruct.lambdaFunction
        });
    }
}
