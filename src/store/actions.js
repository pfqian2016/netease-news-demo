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
    getIntoDetails({commit}, payload) {
        commit(types.GET_INTO_DETAILS, payload);
    },
    showLoginModal({commit}) {
        commit(types.SHOW_LOGIN_MODAL);
    },
    showSignupModal({commit}) {
        commit(types.SHOW_SIGNUP_MODAL);
    },
    login({commit},user) {
        commit(types.USER_LOGIN, user);
    },
    signup({commit},user) {
        commit(types.USER_SIGNUP, user);
    },
    logout({commit}) {
        commit(types.USER_LOGOUT);
    },
    favor({commit}) {
        commit(types.FAVOR);
    },
    back({commit}) {
        commit(types.BACK);
    }
}

export default actions
