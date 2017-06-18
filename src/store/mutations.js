import * as types from './types'

const mutations = {
    [types.REFRESH](state) {
        //clear array of datas
        state[state.currentType + 'NewsList'] = [];
        state[state.currentType + 'QueryPage'] = 1;
        queryDatas(state);
    },
    [types.FETCH_NEWS](state) {
        if(state[state.currentType + 'NewsList'].length) return ;
        queryDatas(state);
    },
    [types.LOAD_MORE](state) {
        queryDatas(state);
    },
    [types.GET_INTO_DETAILS](state, payload) {
        queryDetails(state, payload);
        state.isNewsDetailsShown = true;
    },
    [types.SHOW_LOGIN_MODAL](state) {
        state.isLoginOrSignup = 'Login';
        state.showModal = true;
    },
    [types.SHOW_SIGNUP_MODAL](state) {
        state.isLoginOrSignup = 'Sign up';
        state.showModal = true;
    },
    [types.USER_LOGIN](state,user) {
        if(login(state, user)){
            console.log(user.username + ' login');
            state.isUserValid = true;
            state.showModal = false;
        }else {
            console.log('Please register first');
        }
    },
    [types.USER_SIGNUP](state,user) {
        console.log(user.username + ' sign up');
        signUp(state, user);
        state.isUserValid = true;
        state.showModal = false;
    },
    [types.USER_LOGOUT](state) {
        console.log(state.userInfo.username + ' log out');
        state.isUserValid = false;
        state.userInfo = {};
    }
}

function queryDatas(state) {
    state.isLoading = true;
    let xhr = new XMLHttpRequest();
    let url = 'http://wangyi.butterfly.mopaasapp.com/news/api?type='
              + state.currentType
              + '&page='
              + state[state.currentType +'QueryPage']
              + '&limit=10';
    xhr.open('GET',url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 304) {
                let lists = JSON.parse(xhr.responseText).list;
                for(let i = 0; i < lists.length; i++) {
                    state[state.currentType + 'NewsList'].push(lists[i]);
                }
                state[state.currentType + 'QueryPage']++;
                state.isLoading = false;
            }
        }
    };
    xhr.send(null);
}
function queryDetails(state, payload) {
    let xhr = new XMLHttpRequest();
    let url = 'http://wangyi.butterfly.mopaasapp.com/detail/api?simpleId='
              + payload.id;
    xhr.open('GET',url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 304) {
                let details = JSON.parse(xhr.responseText);
                details.docurl = payload.docurl;
                state.newsDetails = details;
            }
        }
    };
    xhr.send(null);
}
function signUp(state, user) {
    let userList = JSON.parse(window.localStorage.getItem(types.NETEASE_NEWS_USERS)) || [];
    user.favorites = [];
    user.messages = [];
    userList.push(user);
    window.localStorage.setItem(types.NETEASE_NEWS_USERS,JSON.stringify(userList));
    state.userInfo = user;
}
function login(state, user) {
    let ret = false;
    let userList = JSON.parse(window.localStorage.getItem(types.NETEASE_NEWS_USERS)) || [];
    if(userList.length) {
        userList.forEach(item => {
            if(item.username === user.username && item.password === user.password) {
                state.userInfo = user;
                ret = true;
            }
        });
    }
    return ret;
}
export default mutations
