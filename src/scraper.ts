import axios from "axios";
import cheerio from "cheerio";
import {
    PROXY_API_KEY,
    BUY_ME_BUTTON_SELECTOR,
    ProductAvailabilityData,
    ProductCheckListItem,
    PRODUCT_CHECK_LIST,
    PROXY_BASE_URL
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
            const response = await axios.get(PROXY_BASE_URL, {
                params: {
                    'api_key': PROXY_API_KEY,
                    'url': productData.url,
                    'render_js': true
                }
            });
            return response.data;
        } catch (error) {
            console.log(`Error occurs when fetching data from ${productData.url}`);
            console.log(error);
            throw error;
        }
    }

    private extractAvailabilityInfo = (html: string | Buffer, productData: ProductCheckListItem): ProductAvailabilityData => {
        const $ = cheerio.load(html);
        const targetElement = $(BUY_ME_BUTTON_SELECTOR);
        if (targetElement.length === 0) {
            throw new Error(`Could not find the target element when scraping ${productData.url}`);
        }
        const available = targetElement.attr()['style'].includes("block");
        console.log("%s: %s.", productData.productName, available ? "AVAILABLE" : "NOT AVAILABLE");
        return {
            ...productData,
            available
        };
    }
};
