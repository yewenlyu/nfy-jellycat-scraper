// Configurations
export type ProductName = "Amuseable Avocado Bag" | "Amuseable Happy Boiled Egg Bag" | "Amuseable Toast Bag";
export interface ProductCheckListItem {
    productName: ProductName;
    url: string;
};
export interface ProductAvailabilityData extends ProductCheckListItem {
    available: boolean;
}

export const PRODUCT_CHECK_LIST: ProductCheckListItem[] = [
    {
        productName: "Amuseable Avocado Bag",
        url: "https://www.jellycat.com/us/amuseable-avocado-bag-a4asb"
    },
    {
        productName: "Amuseable Happy Boiled Egg Bag",
        url: "https://www.jellycat.com/us/amuseable-happy-boiled-egg-bag-a4be"
    },
    {
        productName: "Amuseable Toast Bag",
        url: "https://www.jellycat.com/us/amuseable-toast-bag-a4tb"
    }
];

// Proxy
export const PROXY_BASE_URL = "https://proxy.scrapeops.io/v1/";
export const PROXY_API_KEY = "";

// Selectors
export const BUY_ME_BUTTON_SELECTOR = "#variant-grid-area > div.pl2-notnarrow > div.pt0-5 > div.container-cols > form.fieldwithbutton.mb > div:nth-child(1)";

// Github
export const REPOSITORY_URL = "https://github.com/yewenlyu/nfy-jellycat-scraper/";