import React from "react";
import {connect} from "react-redux";
import Contents from "./contents.jsx";

function mapStateToProps(state)
{
    return {
        newRecord: state.records.newRecord,
        test: "test"
    }
}


const ContentsContainer = connect(mapStateToProps)(Contents); //,null

export default ContentsContainer;