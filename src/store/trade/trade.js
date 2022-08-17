import { reqtradedata } from '../../network/trade'
const state = {
    tradedata: {}
}  
const getters = {
    userAddressList(state) {
        return state.userAddressList || []
    }
}
const mutations = {
    GETTRADDATA(state,data) {
        state.tradedata = data
    }
}
const actions = {
    async gettradedata({commit}) {
        const result = await reqtradedata()
        commit('GETTRADDATA',result.data)
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}