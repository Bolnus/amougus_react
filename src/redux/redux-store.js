import {createStore, combineReducers} from "redux";
import {recordsReducer} from "./records-reducer";
import {newRecordReducer} from "./newrecord-reducer";

let reducersObject = {
    records: recordsReducer,
    //newRecord: newRecordReducer
}
let reducers = combineReducers(reducersObject);
let store = createStore(reducers);

export default store;