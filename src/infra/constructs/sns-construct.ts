import { Topic } from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

export default class SNSConstruct extends Construct {
    readonly snsTopic: Topic;

    constructor(scope: Construct, id: string) {
        super(scope, id);
        this.snsTopic = new Topic(this, 'JellyCatProductAvailabilityTopic');
    }
}
