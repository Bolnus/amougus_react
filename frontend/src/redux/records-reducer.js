import {getPlace} from "./place-getter";
import _ from "lodash";

const WRITE_RECORD="WRITE-RECORD";
const PREPARE_RECORD="PREPARE-RECORD";
const CLEAR_RECORD="CLEAR-RECORD";
const UPDATE_NEW_RECORD_NAME="UPDATE-NEW-RECORD-NAME";

let maxRecords = 5;

export function writeRecordActionCreator()
{
    return {
        type: WRITE_RECORD,
    };
}

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
    recordsData: [
        {
            "name": "AAA",
            "date": "5.1.2022",
            "time": "17:17:58",
            "result": "00-06-120"
        },
        {
            "name": "AAA",
            "date": "5.1.2022",
            "time": "17:17:58",
            "result": "00-06-144"
        },
        {
            "name": "AAA",
            "date": "6.1.2022",
            "time": "18:44:39",
            "result": "00-06-310"
        },
        {
            "name": "AAA",
            "date": "6.1.2022",
            "time": "18:47:29",
            "result": "00-06-410"
        },
        {
            "name": "AAA",
            "date": "6.1.2022",
            "time": "18:58:1",
            "result": "00-08-805"
        }],
    newRecord: {

    }
}

export function recordsReducer(state=initialState, action)
{
    if(action.type===WRITE_RECORD&&state.newRecord.hasOwnProperty("result"))
    {
        let newState=_.cloneDeep(state); //lodash deep copy
        //newState.newRecord = state.newRecord;
        newState.newRecord.place = getPlace(newState, newState.newRecord.result);
        if (newState.newRecord.place < maxRecords)
        {
            let newNewRecord = {
                "name": state.newRecord.name,
                "date": state.newRecord.date,
                "time": state.newRecord.time,
                "result": state.newRecord.result
            }
            newState.recordsData.splice(newState.newRecord.place, 0, newNewRecord);
            if (newState.recordsData.length > maxRecords)
                newState.recordsData.pop();
        }
        return newState;
    }
    else
    {
        switch(action.type) {
            case PREPARE_RECORD:
            {
                //console.log(PREPARE_RECORD);
                let date = new Date();
                let currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                let month = date.getMonth() + 1;
                let currentDate = date.getDate() + '.' + month + '.' + date.getFullYear();
                let newNewRecord = {
                    "date": currentDate,
                    "time": currentTime,
                    "result": action.result
                };
                let placeNumber = getPlace(state, action.result);
                if (placeNumber < maxRecords) {
                    newNewRecord.place = placeNumber;
                    newNewRecord.name = "AAA";
                }
                let newState=_.cloneDeep(state);
                newState.newRecord = _.cloneDeep(newNewRecord);
                //rerenderEntireTree(this);
                return newState;
            }
            case CLEAR_RECORD:
            {
                let newState=_.cloneDeep(state);
                newState.newRecord = {};
                //rerenderEntireTree(this);
                return newState;
            }
            case UPDATE_NEW_RECORD_NAME:
            {
                let newState=_.cloneDeep(state);
                //newState.newRecord = state.newRecord;
                newState.newRecord.name = action.newName;
                //rerenderEntireTree(this);
                return newState;
            }
            default:
            {
                console.log("No such action type: " + action.type);
                return state;
            }
        }
        //console.log("No such action type: "+action.type);
    }



    //return state;
}