import requests from "./request";
import mockreq from "./mock"

export function reqCategoryList() {
    return requests({
        url: '/product/getBaseCategoryList'
    })
}

export function reqGetBannerList() {
    return mockreq({
        url: '/banner'
    })
}
export function reqGetFoorLisr() {
    return mockreq({
        url: '/floor'
    })
}