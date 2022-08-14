import request from "./request";

export function reqGetsearch(data) {
    return request({
        url: '/list',
        method: 'post',
        data: data
    })
}