/* eslint-disable no-unused-vars */
import { reqcartList,reqdeletecart ,reqischecked} from '../../network/shopcart'
const state = {
    cartInfoList: []
}
const getters = {
    cartInfoList(state) {
        return state.cartInfoList || []
    }
}
const mutations = {
    GETCARTLIST(state,data) {
        state.cartInfoList = data
    }
}
const actions = {
    async getcartList({commit}) {
        let results = await reqcartList()
        commit('GETCARTLIST', results.data[0].cartInfoList)
    },
    deletecart({commit}, skuId) {
        return reqdeletecart(skuId)
    },
    ischecked({ commit }, { skuID, isChecked }) {
        return reqischecked(skuID, isChecked)
    },
    deletecartall({state,dispatch}) {
        let promiseall = []
        state.cartInfoList.forEach(element => {
            if (element.isChecked === 1) {
                let promise = dispatch('deletecart', element.skuId)
                promiseall.push(promise)
            }
        }) 
        return Promise.all(promiseall)
    },
    ischeckedall({state,dispatch},checked) {
        let promiseall = []
        state.cartInfoList.forEach(element => {
           let promise = dispatch('ischecked', { skuID: element.skuId, isChecked: checked })
            promiseall.push(promise)
        })
        return Promise.all(promiseall)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}