import Name from "./name.jsx";
import {
    updateNewRecordNameActionCreator,
    writeRecordActionCreator
} from "../../../redux/records-reducer";
import React from "react";
import {connect} from "react-redux"

// let cb_dispatch;
//
//
// function writeRecord()
// {
//     cb_dispatch(writeRecordActionCreator());
// }
//
// function updateNewRecordName(name)
// {
//     cb_dispatch(updateNewRecordNameActionCreator(name));
// }
//
// function NameContainerLegacy(props)
// {
//     cb_dispatch=props.store.dispatch;
//     return(
//         <Name setPage={props.setPage} writeRecord={writeRecord} updateNewRecordName={updateNewRecordName} newRecord={props.store.getState().records.newRecord}/>
//     );
// }

function mapStateToProps(state)
{
    return {
        newRecord: state.records.newRecord
    }
}

function mapDispatchToProps(dispatch, ownProps)
{
    return {
        setPage: ownProps.setPage,
        writeRecord()
        {
            dispatch(writeRecordActionCreator());
        },
        updateNewRecordName(name)
        {
            //debugger;
            dispatch(updateNewRecordNameActionCreator(name));
        }
    }
}

const NameContainer = connect(mapStateToProps,mapDispatchToProps)(Name);

export default NameContainer;