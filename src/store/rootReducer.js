import { combineReducers } from "redux";
import postsReducer from './posts/reducers/index'

export default combineReducers({
    posts: postsReducer
})