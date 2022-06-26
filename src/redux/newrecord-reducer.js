import {getPlace} from "./place-getter";

const PREPARE_RECORD="PREPARE-RECORD";
const CLEAR_RECORD="CLEAR-RECORD";
const UPDATE_NEW_RECORD_NAME="UPDATE-NEW-RECORD-NAME";

let maxRecords = 5;

export function prepareRecordActionCreator(result)
{
    return {
        type: PREPARE_RECORD,
        result: result
    };
}

export function clearRecordActionCreator()
{
    return {
        type: CLEAR_RECORD,
    };
}

export function updateNewRecordNameActionCreator(newName)
{
    return {
        type: UPDATE_NEW_RECORD_NAME,
        newName: newName
    };
}

let initialState = {

}

export function newRecordReducer(state, action)
{
    switch(action.type)
    {
        case PREPARE_RECORD:
            let date = new Date();
            let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            let month = date.getMonth()+1;
            let currentDate = date.getDate()+'.'+month+'.'+date.getFullYear();
            let newNewRecord = {
                "date": currentDate,
                "time": currentTime,
                "result": action.result
            }
            let placeNumber = getPlace(state, action.result);
            if(placeNumber<maxRecords)
            {
                newNewRecord.place=placeNumber;
                newNewRecord.name = "AAA";
            }
            state.newRecord = newNewRecord;
            //rerenderEntireTree(this);
            return state.newRecord;
        case CLEAR_RECORD:
            state.newRecord = {};
            //rerenderEntireTree(this);
            return state.newRecord;
        case UPDATE_NEW_RECORD_NAME:
            state.newRecord.name=action.newName;
            //rerenderEntireTree(this);
            return state.newRecord;
        default:
            //console.log("No such action type: "+action.type);
            return 0;
    }

}