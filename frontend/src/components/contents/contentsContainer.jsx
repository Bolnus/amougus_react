import React from "react";
import {connect} from "react-redux";
import Contents from "./contents.jsx";
import {setRecordsActionCreator} from "../../redux/records-reducer.js";

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
        }
    }
}

const ContentsContainer = connect(mapStateToProps,mapDispatchToProps)(Contents); //,null

export default ContentsContainer;