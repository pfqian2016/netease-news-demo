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
        checkFavored(state, payload);
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
        logout(state);
        state.isUserValid = false;
        state.userInfo = {};
    },
    [types.FAVOR](state) {
        if(!state.isFavorite) {
            //TODO add news to favorites
            if(state.isUserValid) {
                state.userInfo.favorites.push(state.newsDetails);
                state.isFavorite = !state.isFavorite;
                console.log('favorites: ' + state.userInfo.favorites);
            } else {
                console.log('Please login first');
            }
        } else {
            //TODO remove news from favorites
            state.userInfo.favorites.forEach((item, index, arr) => {
                if(item.simple_id === state.newsDetails.simple_id) {
                    arr.splice(index,1);
                    state.isFavorite = !state.isFavorite;
                    console.log('favorites: ' + state.userInfo.favorites);
                }
            })
        }
    },
    [types.BACK](state) {
        state.isNewsDetailsShown = false;
        state.newsDetails = {};
        state.isFavorite = false;
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
    xhr.open('GET', url, true);
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
    user.favorites = [];
    user.messages = [];
    state.userInfo = user;
    state.userList = JSON.parse(window.localStorage.getItem(types.NETEASE_NEWS_USERS)) || [];
    window.localStorage.removeItem(types.NETEASE_NEWS_USERS);
}
function login(state, user) {
    let ret = false;
    let userList = JSON.parse(window.localStorage.getItem(types.NETEASE_NEWS_USERS)) || [];
    if(userList.length) {
        userList.forEach((item, index, arr) => {
            if(item.username === user.username && item.password === user.password) {
                state.userInfo = arr.splice(index, 1)[0];
                ret = true;
            }
        });
    }
    state.userList = userList;
    window.localStorage.removeItem(types.NETEASE_NEWS_USERS);
    return ret;
}
function logout(state) {
    let userList = state.userList;
    userList.push(state.userInfo);
    window.localStorage.setItem(types.NETEASE_NEWS_USERS,JSON.stringify(userList));
}
 function checkFavored(state, payload) {
    state.isFavorite = state.userInfo.favorites.some(item => item.simple_id === payload.id);
 }
export default mutations
