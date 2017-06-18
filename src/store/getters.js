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
        return state[state.currentType + 'NewsList'];
    }
}
/**
 * 数组去重函数
 */
function dedupe(arr) {
    return [...new Set(arr)];
}
export default getters
