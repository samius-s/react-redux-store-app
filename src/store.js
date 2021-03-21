import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

const logMiddleware = () => (dispatch) => (action) => {
    console.log(action.type)
    return dispatch(action)
}

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === 'string') { return dispatch({ type: action }) }
    return dispatch(action)
}

// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch
//     store.dispatch = (action) => {
//         console.log(action.type)
//         return originalDispatch(action)
//     }

//     return store
// }

// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             })
//         }
//         return originalDispatch(action)
//     }

//     return store

// }

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,
    stringMiddleware,
    logMiddleware))

const myAction = (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAY_ACTION'
    }), 2000
    )
}

const delayActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAY_ACTION'
    }), timeout
    )
}

store.dispatch(delayActionCreator(3000))

export default store