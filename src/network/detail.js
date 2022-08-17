import request from "./request";

export function reqGoodsInfo(id) {
    return request({
        url: `/item/${id}`,
        method: 'get',
    })
}
export function reqaddOrUpdateShopCart(skuId,skuNum) {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post',
    })
}