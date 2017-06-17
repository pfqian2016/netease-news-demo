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
    [types.USER_LOGIN](state) {
        // state.isUserValid = true;
        state.showModal = true;
    },
    [types.USER_SIGNUP](state) {
        console.log('User sign up');
    },
    [types.USER_LOGOUT](state) {
        state.isUserValid = false;
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
    console.log(payload.id);
    let xhr = new XMLHttpRequest();
    let url = 'http://wangyi.butterfly.mopaasapp.com/detail/api?simpleId='
              + payload.id;
    xhr.open('GET',url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 304) {
                let details = JSON.parse(xhr.responseText);
                details.docurl = payload.docurl;
                state.detailedNews = details;
            }
        }
    };
    xhr.send(null);
}
export default mutations
