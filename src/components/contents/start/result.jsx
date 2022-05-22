import {useNavigate} from "react-router-dom";
import classes from "./start.module.css";
import React from "react";

function Result(props)
{
    return(
        <div className={`${classes.resultPage} page block`}>
            <div className={`${classes.resultWindow} block`}>
                <div className={`${classes.resultWindow__hat} block`}>
                    <p className={classes.resultWindow__header}>Result</p>
                    <p className={classes.resultWindow__closeButton}>✖</p>
                </div>
                <div className={`${classes.resultWindow__body} block`}>
                    <p className={classes.resultWindow__text}>59:59:9999</p>
                </div>
            </div>
        </div>
    );
    //<Link to="/records">
}

export default Result;