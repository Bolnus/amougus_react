import React from "react";
import {connect} from "react-redux";
import Contents from "./contents.jsx";
import {setFetchingStateActionCreator, setRecordsActionCreator} from "../../redux/records-reducer.js";

function mapStateToProps(state)
{
    return {
        newRecord: state.records.newRecord,
        recordsData: state.records.recordsData
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        setRecordsData(recordsData)
        {
            dispatch(setRecordsActionCreator(recordsData));
        },
        setFetchingState(fetching_state)
        {
            dispatch(setFetchingStateActionCreator(fetching_state));
        }
    }
}

const ContentsContainer = connect(mapStateToProps,mapDispatchToProps)(Contents); //,null

export default ContentsContainer;