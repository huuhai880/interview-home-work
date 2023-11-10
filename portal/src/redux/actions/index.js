export const getListPost = (params) => ({
    type: 'BLOG_GETLIST',
    params:params
})

export const addPost = (params) => ({
    type: 'BLOG_ADDPOST',
    params:params
})

export const getProfile = () => ({
    type: 'USER_PROFILE'
})

export const userLogin = (params) => ({
    type: 'USER_LOGIN',
    params: params
})