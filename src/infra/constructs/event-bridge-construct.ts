import { Duration } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { addLambdaPermission, LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

type EventBridgeConstructProps = {
    readonly lambdaFunction: Function;
}

export default class EventBridgeConstruct extends Construct {
    readonly scheduledRule: Rule;

    constructor(scope: Construct, id: string, props: EventBridgeConstructProps) {
        super(scope, id);

        const scheduledRuleTarget = new LambdaFunction(props.lambdaFunction);

        this.scheduledRule = new Rule(this, 'WebScraperScheduledEventRule', {
            schedule: Schedule.rate(Duration.minutes(20)),
            targets: [scheduledRuleTarget]
        });

        addLambdaPermission(this.scheduledRule, props.lambdaFunction);
    }
}
