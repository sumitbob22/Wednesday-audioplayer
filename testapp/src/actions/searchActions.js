import {SEARCH_REQUEST} from '../constant/searchActionType';

export const searchRequest = (payload) =>{
    console.log("insode actions",payload
    )
    return{
        type:SEARCH_REQUEST,
        payload
    }
}