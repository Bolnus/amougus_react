import React from "react";
import {clearRecordActionCreator} from "../../../redux/records-reducer.js";
import Result from "./result";
import {connect} from "react-redux"

// let cb_dispatch;
//
// function clearRecord()
// {
//     cb_dispatch(clearRecordActionCreator());
// }
//
// function ResultContainerLegacy(props)
// {
//     cb_dispatch=props.store.dispatch;
//     //cb_clearRecord=props.clearRecord;
//     return(
//         <Result setPage={props.setPage} clearRecord={clearRecord} newRecord={props.store.getState().records.newRecord}/>
//     );
//     //<Link to="/records">
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
        clearRecord()
        {
            dispatch(clearRecordActionCreator());
        }
    }
}

const ResultContainer = connect(mapStateToProps,mapDispatchToProps)(Result);

export default ResultContainer;