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
    warNewsList(state) {
        return state.warNewsList
    },
    isLoading(state) {
        return state.isLoading
    }
}
export default getters
