/* eslint-disable no-unused-vars */
import { reqgetcode ,reqregister,reqlogin,requserinfo, reqexitlogin} from '../../network/user'
const state = {
    token: '',
    userinfo: {}
}
const getters = {

}

const mutations = {
    GETUSERTOKEN(state,token){
        state.token = token
    },
    GETUSERINFO(state,data) {
        state.userinfo = data
    }
}
const actions = {
     getcode({commit},phone) {
        return reqgetcode(phone)
    },
    getregister({commit},data) {
        return reqregister(data)
    },
    async getlogin({commit},data) {
        let result = await reqlogin(data)
         if(result.code === 200) {
            localStorage.setItem('token',result.data.token)
            commit('GETUSERTOKEN', result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async getuserinfo({commit}) {
        let result = await requserinfo()
        if(result.code === 200) {
            commit('GETUSERINFO',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        } 
    },
    async getexitlogin() {
        let result = await reqexitlogin()
        if(result.code === 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    } 
}
export default {
    state,
    getters,
    mutations,
    actions
}