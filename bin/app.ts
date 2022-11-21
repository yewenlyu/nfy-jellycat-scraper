#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import InfraStack from '../src/infra/infra-stack';

const app = new App();

new InfraStack(app, 'NFYWebScraperInfraStack', {
    stackName: 'NFYWebScraperInfraStack',
    description: 'EventBridge -> Lambda -> SNS serverless infra stack for NFYWebScraper.',
    env: {
        account: '074133793146',
        region: 'us-west-1'
    }
});
