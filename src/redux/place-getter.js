

export function getPlace(state, resultValue)
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