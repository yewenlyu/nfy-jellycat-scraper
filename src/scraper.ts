import axios from "axios";
import cheerio from "cheerio";
import {
    BUY_ME_BUTTON_SELECTOR,
    MOCK_HEADERS,
    ProductAvailabilityData,
    ProductCheckListItem,
    PRODUCT_CHECK_LIST,
    VISIBLE_SELECTOR
} from "./const";

export default class JellyCatScraper {

    public run = async (): Promise<ProductAvailabilityData[]> => {
        let resultList: ProductAvailabilityData[] = [];
        for (const productData of PRODUCT_CHECK_LIST) {
            const html = await this.loadProductDetailsPage(productData);
            const productAvailabilityData = this.extractAvailabilityInfo(html, productData);
            resultList.push(productAvailabilityData);
        }
        return resultList;
    }

    private loadProductDetailsPage = async (productData: ProductCheckListItem): Promise<string | Buffer> => {
        try {
            const response = await axios.get(productData.url, {
                headers: MOCK_HEADERS
            });
            return response.data;
        } catch (error) {
            console.log(`Error occurs when fetching data from ${productData.url}`);
            throw error;
        }
    }

    private extractAvailabilityInfo = (html: string | Buffer, productData: ProductCheckListItem): ProductAvailabilityData => {
        const $ = cheerio.load(html);
        const targetElement = $(BUY_ME_BUTTON_SELECTOR);
        if (targetElement.length === 0) {
            throw new Error(`Could not find the target element when scraping ${productData.url}`);
        }
        const available = targetElement.is(VISIBLE_SELECTOR);
        console.log("%s: %s.", productData.productName, available ? "AVAILABLE" : "NOT AVAILABLE");
        return {
            ...productData,
            available
        };
    }
};
