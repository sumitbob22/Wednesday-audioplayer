import { put, takeEvery, call } from 'redux-saga/effects';
import {SEARCH_REQUEST,SEARCH_SUCCESS,SEARCH_FAILURE} from '../constant/searchActionType';
import{Get} from '../api/service';
import{getQuryString} from '../utils'

function* searchAsync(action) {
    const searchQuery = getQuryString({term:action.payload,nocache:(new Date).getTime()})
    const results = yield call(Get,`https://itunes.apple.com/search?${searchQuery}`);
    if(results){
        yield put({type:SEARCH_SUCCESS,payload:{results}})
    }else{
        yield put({type:SEARCH_FAILURE,payload:{results:[]}})
    }
}

export default function* searchSaga() {
    yield takeEvery(SEARCH_REQUEST, searchAsync);
}