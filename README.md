# nfy-jellycat-scraper
An AWS based web scrapper:
1. A CloudWatch EventBridge is scheduled to tirgger the Lambda scraper every 20 minutes.
2. If a product is available, Lambda will publish a message to SNS Topic. Message will be delivered to Email & SMS through SNS Subscription.

![architecture](https://user-images.githubusercontent.com/46354696/205776695-d100cda6-4f7f-48e2-b7b0-57656d82904e.png)

## Requirements
- [x] NodeJS >= 14
- [x] Docker (Requirement for AWS CDK)
- [x] An AWS account

## Usage

### Getting Started

1. Run the following commands to deploy the serverless application to AWS. 

    ```sh
    # Clone the package
    git clone https://github.com/yewenlyu/nfy-jellycat-scraper.git
    # Downlaod (dev)dependencies
    npm install
    # Provision resources for CDK deployment
    cdk bootstrap aws://ACCOUNT-NUMBER/REGION
    # Synthesizes and prints the CloudFormation template to be deployed
    cdk synth
    # Deploy the infra stack using CloudFormation
    cdk deploy
    ```

2. Log into the AWS console, find the SNS Topic with name prefixed with `NFYWebScraperInfraStack`, create Subscription to your email or SMS.

### Local Testing

Use the following command to run the scraper once - 
```sh
# Use a NodeJS entry point to run scraper once
npm run test
``` 

### Customization and Extension

```TypeScript
// src/const.ts

export type ProductName = "Amuseable Coffee-To-Go Bag" |
                          "Amuseable Avocado Bag" |
                          "Amuseable Happy Boiled Egg Bag" |
                          "Amuseable Toast Bag";
// Add product Name here

export const PRODUCT_CHECK_LIST: ProductCheckListItem[] = [
    {
        productName: "Amuseable Coffee-To-Go Bag",
        url: "https://www.jellycat.com/us/amuseable-coffeetogo-bag-a4cofb/"
    },
    {
        productName: "Amuseable Avocado Bag",
        url: "https://www.jellycat.com/us/amuseable-avocado-bag-a4asb"
    }
    // Add productName & detail page url here
];
```