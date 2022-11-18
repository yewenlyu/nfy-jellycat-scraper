// config
export type PRODUCT_NAME = "Amuseable Avocado Bag" | "Amuseable Happy Boiled Egg Bag" | "Amuseable Toast Bag";
export const PRODUCT_CHECK_LIST: { productName: PRODUCT_NAME, url: string }[] = [
    {
        productName: "Amuseable Avocado Bag",
        url: "https://www.jellycat.com/us/amuseable-avocado-bag-a4asb/"
    },
    {
        productName: "Amuseable Happy Boiled Egg Bag",
        url: "https://www.jellycat.com/us/amuseable-happy-boiled-egg-bag-a4be/"
    },
    {
        productName: "Amuseable Toast Bag",
        url: "https://www.jellycat.com/us/amuseable-toast-bag-a4tb/"
    }
];

// Log prefix
export const INFO_TAG = "[INFO] ";
export const DEBUG_TAG = "[DEBUG] ";
export const ERROR_TAG = "[ERROR] ";
