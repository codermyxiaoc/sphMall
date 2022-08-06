import requests from "./request";

export function reqCategoryList() {
    return requests({
        url: '/product/getBaseCategoryList'
    })
}