import { app } from '../epics'
const __INIT_STATE__ = {
    posts: [],
    loading: false
}

export default (state = __INIT_STATE__, action) => {
    switch (action.type) {
        case app.HELLO:
            return {...state, loading: true}
        case app.HELLO_END:
            return {...state, posts: action.payload, loading: false}
        case app.HELLO_ERR:
            return {...state, loading: false}
        default:
            return state
    }
}