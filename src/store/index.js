import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
    msg: 'store message',
    currentType: 'war',
    warNewsList: [],
    sportNewsList: [],
    techNewsList: [],
    eduNewsList: [],
    entNewsList: [],
    moneyNewsList: [],
    gupiaoNewsList: [],
    travelNewsList: [],
    ladyNewsList: [],
    queryPage: 1,
    isLoading: false
};



export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
