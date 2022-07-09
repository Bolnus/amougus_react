import Records from "./records.jsx";

function RecordsContainer(props)
{
    //console.log(recordsComponents[0]);
    // let recordsComponents = recordsData.map(function(recordEl,index)
    // {
    //     return <RecordRow row={index+1} date={recordEl.date} time={recordEl.time} result={recordEl.result}/>
    // });

    //let rowNumber = 1;
    return (
        <Records newRecord={props.store.getState().records.newRecord} recordsData={props.store.getState().records.recordsData} setPage={props.setPage}/>
    )
}

export default RecordsContainer;