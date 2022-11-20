import JellyCatScraper from "./scraper";

const application = new JellyCatScraper();
application.run().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error)
});
