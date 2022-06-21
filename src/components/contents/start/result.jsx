
import classes from "./start.module.css";
import React from "react";
import {clearRecordActionCreator} from "../../../redux/newrecord-reducer.js";

let cb_setPage;
//let cb_clearRecord;
let dispatch;

function pushButton_close_clicked()
{
    // return function()
    // {
        //cb_clearRecord();
    dispatch(clearRecordActionCreator());
    cb_setPage();
    //}
}

function Result(props)
{
    cb_setPage=props.setPage;
    dispatch=props.dispatch;
    //cb_clearRecord=props.clearRecord;
    return(
        <div className={`${classes.resultPage} page block`}>
            <div className={`${classes.resultWindow} block`}>
                <div className={`${classes.resultWindow__hat} block`}>
                    <p className={classes.resultWindow__header}>Result</p>
                    <p className={classes.resultWindow__closeButton} onClick={pushButton_close_clicked}>✖</p>
                </div>
                <div className={`${classes.resultWindow__body} block`}>
                    <p className={classes.resultWindow__text}>{`Your score: ${props.newRecord.result}`}</p>
                </div>
            </div>
        </div>
    );
    //<Link to="/records">
}

export default Result;