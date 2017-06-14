import * as types from './types'

const actions = {
    refresh({commit}) {
        commit(types.REFRESH);
    },
    fetchWarNews({commit}) {
        commit(types.FETCH_WAR_NEWS);
    },
    loadMore({commit}) {
        commit(types.LOAD_MORE);
    }
}

export default actions
