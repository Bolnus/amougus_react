import Name from "./name.jsx";
import {updateNewRecordNameActionCreator, writeRecordActionCreator} from "../../../redux/records-reducer";
import React from "react";

let cb_dispatch;


function writeRecord()
{
    cb_dispatch(writeRecordActionCreator());
}

function updateNewRecordName(name)
{
    cb_dispatch(updateNewRecordNameActionCreator(name));
}

function NameContainer(props)
{
    cb_dispatch=props.store.dispatch;
    return(
        <Name setPage={props.setPage} writeRecord={writeRecord} updateNewRecordName={updateNewRecordName} newRecord={props.store.getState().records.newRecord}/>
    );
}

export default NameContainer;