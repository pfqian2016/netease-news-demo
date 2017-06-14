import * as types from './types'

const mutations = {
    [types.REFRESH](state) {
        //clear array of datas
        state.warNewsList = [];
        state.queryPage = 1;
        queryDatas(state);
    },
    [types.FETCH_WAR_NEWS](state) {
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
              + state.queryPage
              + '&limit=10';
    xhr.open('GET',url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 304) {
                let lists = JSON.parse(xhr.responseText).list;
                for(let i = 0; i < lists.length; i++) {
                    state[state.currentType + 'NewsList'].push(lists[i]);
                }
                state.queryPage++;
                state.isLoading = false;
            }
        }
    };
    xhr.send(null);
}
export default mutations
