import JellyCatScraper from "./scraper";

const application = new JellyCatScraper();
try {
    application.run();
} catch (error) {
    console.error(error);
}
