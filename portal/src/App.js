import React from 'react'
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware, combineReducers } from "redux"
import reducer from "@src/redux/reducers"
import rootSaga from "@src/redux/sagas"
import { reducer as formReducer } from "redux-form"
import { composeWithDevTools } from '@redux-devtools/extension'
import Router from '@router/Router'

const App = () => {

    const sagaMiddleware = createSagaMiddleware()
    const rootReducer = combineReducers({
        reducer,
        form: formReducer
    })

    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    )

    sagaMiddleware.run(rootSaga)

    return (
        <Provider store={store}>
            <Router />
        </Provider>

    )
}
export default App