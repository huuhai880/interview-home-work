import { put, takeLatest, all } from 'redux-saga/effects'
import api from '../../api'
import { COOKIE_JWT } from '../../utils/constants'
import { setCookie } from '../../utils/cookie'

function* fetchGetList() {
    try {
        const response = yield api().get(`/post`)
        
        yield put({ type: "BLOG_GETLIST_SUCCESSED", json: response })
    } catch (error) {
        yield put({ type: "BLOG_GETLIST_FAILED", error: error?.message })
    }
}

function* getListBlog() {
    yield takeLatest('BLOG_GETLIST', fetchGetList)
}


function* fetchAddPost({params}) {
    try {
        const response = yield api().post(`/post/add-post`, params)
        yield put({ type: "BLOG_GETLIST_SUCCESSED", json: response })
    } catch (error) {
        
        yield put({ type: "BLOG_GETLIST_FAILED", error: error?.message })
    }
}

function* addPost() {
    yield takeLatest('BLOG_ADDPOST', fetchAddPost)
}


function* fetchProfile() {
    try {
        const response = yield api().get(`/user/detail`)
        yield put({ type: "USER_GETPROFILE_SUCCESSED", json: response })
    } catch (error) {
        yield put({ type: "USER_GETPROFILE_FAILED", error: error?.message })
    }
}

function* getProfile() {

    yield takeLatest('USER_PROFILE', fetchProfile)
}

function* fetchLogin({ params }) {
    try {
        const { data } = yield api().post(`/auth/token`, params)
        setCookie(COOKIE_JWT, JSON.stringify(data))
        yield put({ type: "USER_LOGIN_SUCCESSED", json: data })
    } catch (error) {
        yield put({ type: "USER_LOGIN_FAILED", error: error?.message })
    }
}

function* login() {
    yield takeLatest('USER_LOGIN', fetchLogin)
}


export default function* rootSaga() {
    yield all([getListBlog(), login(), getProfile(), addPost()])
}