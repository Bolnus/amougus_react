import {getPlace} from "./place-getter";

const WRITE_RECORD="WRITE-RECORD";

let maxRecords = 5;

export function writeRecordActionCreator()
{
    return {
        type: WRITE_RECORD,
    };
}

export function recordsReducer(state, action)
{
    if(action.type===WRITE_RECORD&&state.newRecord.hasOwnProperty("result"))
    {
        state.newRecord.place = getPlace(state, state.newRecord.result);
        if (state.newRecord.place < maxRecords)
        {
            let newNewRecord = {
                "name": state.newRecord.name,
                "date": state.newRecord.date,
                "time": state.newRecord.time,
                "result": state.newRecord.result
            }
            state.recordsData.splice(state.newRecord.place, 0, newNewRecord);
            if (state.recordsData.length > maxRecords)
                state.recordsData.pop();
        }
        return state;
    }
    else
    {
        return 0;
        //console.log("No such action type: "+action.type);
    }

    //return state;
}