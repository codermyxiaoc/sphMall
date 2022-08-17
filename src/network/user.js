import request from "./request";
export function reqgetcode(phone) {
    return request({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    })
}
export function reqregister(data) {
    return request({
        url: '/user/passport/register',
        method: 'post',
        data: data
    })
}
export function reqlogin(data) {
    return request({
        url: `/user/passport/login`,
        method: 'post',
        data: data
    })
}
export function requserinfo() {
    return request({
        url: '/user/passport/auth/getUserInfo',
        method: 'get'
    })
}
export function reqexitlogin() {
    return request({
        url: '/user/passport/logout',
        method: 'get'
    })
}