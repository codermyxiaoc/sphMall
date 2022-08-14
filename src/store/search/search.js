import { reqGetsearch } from 'network/search'
const state = { 
   searchlist: {}
}
const getters = {
        goodsList(state){
        return state.searchlist.goodsList || [];
        },
        attrsList(state) {
            return state.searchlist.attrsList || [];
        } ,
        trademarkList(state) {
            return state.searchlist.trademarkList || []
        }
        
}
const mutations = {
    GETSECRCHLIST(state,data) {
        state.searchlist = data
    }
}
const actions = {
     async GetsearchList({ commit },data = {}) {
         let results = await reqGetsearch(data)
        commit('GETSECRCHLIST', results.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}