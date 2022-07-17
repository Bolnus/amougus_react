import classes from "./records.module.css";
import RecordRow from './recordrow.jsx'

let count;
let newRow=-1;

function componentGetter(recordEl)
{
    count++;
    return <RecordRow row={count} date={recordEl.date} time={recordEl.time} result={recordEl.result} name={recordEl.name} newRow={newRow} key={count}/>
}

function Records(props)
{
    if(props.newRecord.hasOwnProperty("place"))
    {
        newRow=props.newRecord.place;
        console.log("place:"+props.newRecord.place);
    }
    props.setPage();
    count = 0;
    let recordsComponents = props.recordsData.map(componentGetter);
    //console.log(recordsComponents[0]);
    // let recordsComponents = recordsData.map(function(recordEl,index)
    // {
    //     return <RecordRow row={index+1} date={recordEl.date} time={recordEl.time} result={recordEl.result}/>
    // });

    //let rowNumber = 1;
    return (
        <div className={`${classes.recordsPage} page block`}>
            <table className={`${classes.recordsPage__table} block`}>
                <caption className={classes.recordsPage__caption}>RECORDS TABLE</caption>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Score</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsComponents}
                    {/*<RecordRow row={rowNumber++} date={"5.1.2022"} time={"17:17:58"} result={"00-05-980"}/>*/}
                    {/*<RecordRow row={rowNumber++} date={"6.1.2022"} time={"18:44:39"} result={"00-05-710"}/>*/}
                </tbody>
            </table>
        </div>
    )
}

export default Records;