const getters = {
    currentType(state) {
        return state.currentType
    },
    //modify type to show  on header
    type(state) {
      switch (state.currentType) {
        case 'war':
          return 'war'
        case 'sport':
          return 'sport'
        case 'tech':
          return 'tech'
        case 'edu':
          return 'edu'
        case 'ent':
          return 'ent'
        case 'money':
          return 'finiance'
        case 'gupiao':
          return 'stock'
        case 'travel':
          return 'travel'
        case 'lady':
          return 'lady'
        default:
      }
    },
    newsList(state) {
        let ret = dedupe(state[state.currentType + 'NewsList']);
        return ret;
    },
    isLoading(state) {
        return state.isLoading;
    },
    isHeaderVisable(state) {
        return state.showHeader;
    },
    isNewsDetailsShown(state) {
        return state.isNewsDetailsShown;
    }
}
function dedupe(arr) {
    return [...new Set(arr)];
}
export default getters
