import { reqCategoryList } from 'network/home'
const state = { 
    categoryList:[]
}
const getters = {
    
}
const mutations = {
   CATEGORYLIST(state,data){
        state.categoryList = data
    }
}
const actions = {
    async categoryList({commit}) {
        let reslt = await reqCategoryList()
        if(reslt.code === 200){
            commit('CATEGORYLIST', reslt.data.slice(0,16))
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}