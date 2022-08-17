import Vue from "vue";
import Vuex from "vuex"

import home from './home/home'
import search from './search/search'
import detail from './detail/detail'
import shopcart from './shopcart/shopcart'
import user from './user/user'
import trade from './trade/trade'

Vue.use(Vuex)

const store =new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})

export default store