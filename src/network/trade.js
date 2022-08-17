import request from "./request";
export function reqtradedata() {
    return request({
        url: `/order/auth/trade`,
        method: 'get'
    })
}
export function reqsubmitOrder(data,tradeNo) {
    return request({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method: 'post',
        data: data
    })
}
export function reqcreateNative(orderId) {
    return request({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get'
    })
}
export function reqPayStatus(orderId) {
    return request({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get'
    })
}
export function reqauth(page,limit) {
    return request({
        url: `/order/auth/${page}/${limit}`,
        method: 'get'
    })
}