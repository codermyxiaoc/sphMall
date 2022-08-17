import  request  from './request'

export function reqcartList() {
    return request({
        url: '/cart/cartList',
        method: 'get'
    })
}
export function reqdeletecart(skuId) {
    return request({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}
export function reqischecked(skuID, isChecked) {
    return request({
        url: `/cart/checkCart/${skuID}/${isChecked}`,
        method: 'get'
    })
}