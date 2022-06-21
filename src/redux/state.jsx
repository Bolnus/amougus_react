import {recordsReducer} from "./records-reducer";
import {newRecordReducer} from "./newrecord-reducer";

let rerenderEntireTree;
let maxRecords = 5;

let store = {
    _state: {
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
        //subPage: "start"
    },
    _getPlace(resultValue)
    {
        //let inserted=0;
        let intResult = parseInt(resultValue.replace(/-/g,''),10);
        if(intResult<parseInt(this._state.recordsData[0].result.replace(/-/g,''),10))
        {
            return 0;
        }
        for(let i=0;i<this._state.recordsData.length-1;i++)
        {
            let result1 = parseInt(this._state.recordsData[i].result.replace(/-/g,''),10);
            let result2 = parseInt(this._state.recordsData[i+1].result.replace(/-/g,''),10);

            if(intResult>result1&&intResult<result2)
            {
                //state.recordsData.splice(i+1, 0, newRecord);
                //inserted=1;
                return i+1;
                //newNewRecord.name = "AAA";
                //state.newRecord = newNewRecord;
            }
        }
        return this._state.recordsData.length;
    },
    state()
    {
        return this._state;
    },
    subscribe(observer)
    {
        rerenderEntireTree=observer;
    },
    dispatch(action)
    {
        let actionDispatchedFlag = 0;
        let reducerResult = 0;
        reducerResult = recordsReducer(this._state,action);
        if(reducerResult)
        {
            actionDispatchedFlag=1;
            this._state = reducerResult;
        }
        reducerResult = newRecordReducer(this._state,action);
        if(reducerResult)
        {
            actionDispatchedFlag = 1;
            this._state.newRecord = reducerResult;
            rerenderEntireTree(this);
        }
        if(!actionDispatchedFlag)
            console.log("No such action type: "+action.type);

        // switch(action.type)
        // {
        //     case PREPARE_RECORD:
        //         let date = new Date();
        //         let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        //         let month = date.getMonth()+1;
        //         let currentDate = date.getDate()+'.'+month+'.'+date.getFullYear();
        //         let newNewRecord = {
        //             "date": currentDate,
        //             "time": currentTime,
        //             "result": action.result
        //         }
        //         let placeNumber = this._getPlace(action.result);
        //         if(placeNumber<maxRecords)
        //         {
        //             newNewRecord.place=placeNumber;
        //             newNewRecord.name = "AAA";
        //         }
        //         this._state.newRecord = newNewRecord;
        //         rerenderEntireTree(this);
        //         break;
        //     case WRITE_RECORD:
        //         if(this._state.newRecord.hasOwnProperty("result"))
        //         {
        //             this._state.newRecord.place = this._getPlace(this._state.newRecord.result);
        //             if (this._state.newRecord.place < maxRecords)
        //             {
        //                 let newNewRecord = {
        //                     "name": this._state.newRecord.name,
        //                     "date": this._state.newRecord.date,
        //                     "time": this._state.newRecord.time,
        //                     "result": this._state.newRecord.result
        //                 }
        //                 this._state.recordsData.splice(this._state.newRecord.place, 0, newNewRecord);
        //                 if (this._state.recordsData.length > maxRecords)
        //                     this._state.recordsData.pop();
        //             }
        //         }
        //         break;
        //     case CLEAR_RECORD:
        //         this._state.newRecord = {};
        //         rerenderEntireTree(this);
        //         break;
        //     case UPDATE_NEW_RECORD_NAME:
        //         this._state.newRecord.name=action.newName;
        //         rerenderEntireTree(this);
        //         break;
        //     default:
        //         console.log("No such action type: "+action.type);
        // }
    }
}



window.store=store;

export default store;