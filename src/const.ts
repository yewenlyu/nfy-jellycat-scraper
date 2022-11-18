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

// Log prefix
export const INFO_TAG = "[INFO] ";
export const DEBUG_TAG = "[DEBUG] ";
export const ERROR_TAG = "[ERROR] ";

export const BUY_ME_BUTTON_SELECTOR = "#variant-grid-area > div.pl2-notnarrow > div.pt0-5 > div.container-cols > form.fieldwithbutton.mb > div:nth-child(1) > input";
export const VISIBLE_SELECTOR = ":visible";

export const FAKE_USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36";

export const MOCK_HEADERS = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': 'macOS',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': 1,
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
}
