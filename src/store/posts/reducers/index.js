import postsType from '../types/index'

const INITAL_STATE = {

}

const postsReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case postsType.CREATE:
            return {
                ...state
            }
        default: 
            return {
                ...state
            }
    }
}

export default postsReducer