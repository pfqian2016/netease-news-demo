import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
    msg: 'store message',
    currentType: '',//当前选中标签类型
    warNewsList: [],//获取军事新闻的数组
    sportNewsList: [],
    techNewsList: [],
    eduNewsList: [],
    entNewsList: [],
    moneyNewsList: [],
    gupiaoNewsList: [],
    travelNewsList: [],
    ladyNewsList: [],
    warQueryPage: 1,//军事新闻想要请求的页数
    sportQueryPage:1,
    techQueryPage:1,
    eduQueryPage:1,
    entQueryPage:1,
    moneyQueryPage:1,
    gupiaoQueryPage:1,
    travelQueryPage:1,
    ladyQueryPage:1,
    isLoading: false,//加载新闻时置为true
    showHeader:true,//路由到user时隐藏header
    isNewsDetailsShown:false,//新闻详情页显示
    detailedNews: {}//请求到的新闻详情对象
};



export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
