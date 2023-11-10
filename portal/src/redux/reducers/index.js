const initialState = {
  loading: false,
  listPost: [],
  error: null,
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BLOG_GETLIST':
      return {
        ...state,
        loading: true
      }
    case 'BLOG_GETLIST_SUCCESSED':
      return {
        ...state,
        listPost: action.json,
        loading: false
      }
    case 'BLOG_GETLIST_FAILED':
      return {
        ...state,
        customerProfile: null,
        loading: false,
        error: action.error
      }
    case 'USER_GETPROFILE_SUCCESSED':
      return {
        ...state,
        user: action.json
      }
    default:
      return state
  }
}

export default reducer