import {SEARCH_SUCCESS,SEARCH_FAILURE} from '../constant/searchActionType';

export default (state = {}, action) => {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return {
                ...state,
                ...action.payload.results
            }
            case SEARCH_FAILURE:
                return {
                    ...state,
                    ...action.payload.results
                }
        default:
            return state
    }
}