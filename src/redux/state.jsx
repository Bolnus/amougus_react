//import {rerenderEntireTree} from "../render.jsx";

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
    state()
    {
        return this._state;
    },
    getPlace(resultValue)
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
    prepareRecord(result)
    {
        let date = new Date();
        let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        let month = date.getMonth()+1;
        let currentDate = date.getDate()+'.'+month+'.'+date.getFullYear();
        let newNewRecord = {
            "date": currentDate,
            "time": currentTime,
            "result": result
        }
        let placeNumber = getPlace(result);
        if(placeNumber<maxRecords)
        {
            newNewRecord.place=placeNumber;
            newNewRecord.name = "AAA";
        }
        this._state.newRecord = newNewRecord;
        rerenderEntireTree(this);
        //return 1;
    },
    writeRecord()
    {
        if(this._state.newRecord.hasOwnProperty("result"))
        {
            this._state.newRecord.place = getPlace(this._state.newRecord.result);
            if (this._state.newRecord.place < maxRecords)
            {
                let newNewRecord = {
                    "name": this._state.newRecord.name,
                    "date": this._state.newRecord.date,
                    "time": this._state.newRecord.time,
                    "result": this._state.newRecord.result
                }
                this._state.recordsData.splice(this._state.newRecord.place, 0, newNewRecord);
                if (this._state.recordsData.length > maxRecords)
                    this._state.recordsData.pop();
            }
        }
    },
    clearRecord()
    {
        this._state.newRecord = {};
        rerenderEntireTree(this);
    },
    updateNewRecordName(newName)
    {
        this._state.newRecord.name=newName;
        rerenderEntireTree(this);
    },
    subscribe(observer)
    {
        rerenderEntireTree=observer;
    }
}



let state = {
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
}

function getPlace(resultValue)
{
    //let inserted=0;
    let intResult = parseInt(resultValue.replace(/-/g,''),10);
    if(intResult<parseInt(state.recordsData[0].result.replace(/-/g,''),10))
    {
        return 0;
    }
    for(let i=0;i<state.recordsData.length-1;i++)
    {
        let result1 = parseInt(state.recordsData[i].result.replace(/-/g,''),10);
        let result2 = parseInt(state.recordsData[i+1].result.replace(/-/g,''),10);

        if(intResult>result1&&intResult<result2)
        {
            //state.recordsData.splice(i+1, 0, newRecord);
            //inserted=1;
            return i+1;
            //newNewRecord.name = "AAA";
            //state.newRecord = newNewRecord;
        }
    }
    return state.recordsData.length;
}

export function prepareRecord(result)
{
    let date = new Date();
    let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    let month = date.getMonth()+1;
    let currentDate = date.getDate()+'.'+month+'.'+date.getFullYear();
    let newNewRecord = {
        "date": currentDate,
        "time": currentTime,
        "result": result
    }
    let placeNumber = getPlace(result);
    if(placeNumber<maxRecords)
    {
        newNewRecord.place=placeNumber;
        newNewRecord.name = "AAA";
    }
    state.newRecord = newNewRecord;
    rerenderEntireTree(state);
    //return 1;
}

export function writeRecord()
{
    if(state.newRecord.hasOwnProperty("result"))
    {
        state.newRecord.place = getPlace(state.newRecord.result);
        if(state.newRecord.place<maxRecords)
        {
            let newNewRecord = {
                "name": state.newRecord.name,
                "date": state.newRecord.date,
                "time": state.newRecord.time,
                "result": state.newRecord.result
            }
            state.recordsData.splice(state.newRecord.place, 0, newNewRecord);
            if(state.recordsData.length>maxRecords)
                state.recordsData.pop();
        }
    }
    //rerenderEntireTree(state);
}

export function clearRecord()
{
    state.newRecord = {};
    rerenderEntireTree(state);
}

export function updateNewRecordName(newName)
{
    state.newRecord.name=newName;
    rerenderEntireTree(state);
}

export function updateRecords()
{
    rerenderEntireTree(state);
}

export function subscribe(observer)
{
    rerenderEntireTree=observer;
}

window.store=store;

export default store;