import * as types from './types'

const actions = {
    //refresh the page
    refresh({commit}) {
        commit(types.REFRESH);
    },
    //fetch news
    fetchNews({commit}) {
        commit(types.FETCH_NEWS);
    },
    loadMore({commit}) {
        commit(types.LOAD_MORE);
    },
    getIntoDetails({commit},payload) {
        commit(types.GET_INTO_DETAILS,payload);
    }
}

export default actions
