import React from "react";
import {clearRecordActionCreator} from "../../../redux/records-reducer.js";
import Result from "./result";

let cb_dispatch;

function clearRecord()
{
    cb_dispatch(clearRecordActionCreator());
}

function ResultContainer(props)
{
    cb_dispatch=props.store.dispatch;
    //cb_clearRecord=props.clearRecord;
    return(
        <Result setPage={props.setPage} clearRecord={clearRecord} newRecord={props.store.getState().records.newRecord}/>
    );
    //<Link to="/records">
}

export default ResultContainer;