import { reqCategoryList , reqGetBannerList, reqGetFoorLisr} from 'network/home'
const state = { 
    categoryList:[],
    bannerLis: [],
    floorList: []
}
const getters = {
    
}
const mutations = {
   CATEGORYLIST(state,data){
        state.categoryList = data
    },
    BANNERLIST(state,data) {
        state.bannerLis = data
    },
    FLOORLIST(state,data) {
        state.floorList = data
    }
}
const actions = {
    async categoryList({commit}) {
        let reslt = await reqCategoryList()
        if(reslt.code === 200){
            commit('CATEGORYLIST', reslt.data.slice(0,16))
        }
    },
    async reqGetBannerList({commit}){
        let banner = await reqGetBannerList()
        commit('BANNERLIST',banner.data)
    },
    async reqGetFoorLisr({commit}) {
        let floor = await reqGetFoorLisr()
        commit('FLOORLIST',floor.date)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}