import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"

export default function (config) {
    const requests = axios.create({
        baseURL: '/mock',
        timeout: 5000
    })
    requests.interceptors.request.use(res => {
        nProgress.start()
        return res
    })
    requests.interceptors.response.use(res => {
        nProgress.done()
        return res.data
    }, err => {
        console.log(err);
    })
    return requests(config)

}