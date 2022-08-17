/* eslint-disable no-unused-vars */

import { getuuid } from '../../utils/uuid_token'
import { reqGoodsInfo, reqaddOrUpdateShopCart } from 'network/detail'
const state = {
    goodsInfoList: {},
    UUID: getuuid()
}
const getters = {
    categoryView(state) {
        return state.goodsInfoList.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfoList.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfoList.spuSaleAttrList || []
    }


}
const mutations = {
    REQGOODSUNFO(state, data) {
        state.goodsInfoList = data
    }
}   
const actions = {
    async reqgoodsInfo({ commit }, skuId) {
        let results = await reqGoodsInfo(skuId)
        commit('REQGOODSUNFO',results.data)
    },
    addOrUpdateShopCart({commit}, { skuId, skuNum }) {
       return reqaddOrUpdateShopCart(skuId, skuNum)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}