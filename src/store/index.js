import Vue from "vue";
import Vuex from "vuex"

import home from './home/home'
import search from './search/search'

Vue.use(Vuex)

const store =new Vuex.Store({
    modules: {
        home,
        search
    }
})

export default store