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
    }
}

export default actions
