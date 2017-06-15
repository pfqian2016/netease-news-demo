import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
    msg: 'store message',
    currentType: '',
    warNewsList: [],
    sportNewsList: [],
    techNewsList: [],
    eduNewsList: [],
    entNewsList: [],
    moneyNewsList: [],
    gupiaoNewsList: [],
    travelNewsList: [],
    ladyNewsList: [],
    warQueryPage: 1,
    sportQueryPage:1,
    techQueryPage:1,
    eduQueryPage:1,
    entQueryPage:1,
    moneyQueryPage:1,
    gupiaoQueryPage:1,
    travelQueryPage:1,
    ladyQueryPage:1,
    isLoading: false
};



export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
