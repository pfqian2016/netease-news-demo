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
export default mutations
