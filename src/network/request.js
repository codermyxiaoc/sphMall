import axios from "axios";
import nProgress from "nprogress";
import store from "@/store";
import "nprogress/nprogress.css"


export default function(config) {
    const requests = axios.create({
        baseURL: '/api',
        timeout: 10000
    })
    requests.interceptors.request.use((res) => { 
        nProgress.start()
         if (store.state.detail.UUID) {
            res.headers.userTempId = store.state.detail.UUID
        }
       /*  if(store.state.user.token) {
            res.headers.token = store.state.user.token
        } */
        if(localStorage.getItem('token')) {
            res.headers.token = localStorage.getItem('token')
        }
        return res
    })
    requests.interceptors.response.use(res => {
        nProgress.done()
        return res.data
    },err => {
        console.log(err);
    })
    return requests(config)
}