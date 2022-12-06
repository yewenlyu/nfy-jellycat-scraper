# nfy-jellycat-scraper
An AWS based web scrapper:
1. A CloudWatch EventBridge is scheduled to tirgger Lambda scraper every 20 minutes.
2. If a product is available, Lambda will publish a message to SNS Topic. Message will be delivered to Email & SMS.

![architecture](https://user-images.githubusercontent.com/46354696/205776695-d100cda6-4f7f-48e2-b7b0-57656d82904e.png)
