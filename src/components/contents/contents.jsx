
import About from "./about/about.jsx"
import Start from "./start/start.jsx"
import Name from "./start/name.jsx"
import Game from "./start/game.jsx"
import Result from "./start/result";
import classes from "./contents.module.css";
import Records from "./records/records.jsx";
import {Route, Routes} from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";
import React from "react";
import { useState } from "react"

function Contents(props)
{
    //debugger;
    const [state, setState] = useState("start");
    console.log("contents");
    //console.log(props.state.newRecord);
    // function setPageName(pageName)
    // {
    //     return function() {setState(pageName)};
    // }
    if(props.state.newRecord.hasOwnProperty("name")) //state==="name"
    {
        return(
            <div className={`${classes.contents} ${classes.contents_geometry} block`}>
                <Routes>
                    <Route path="/" element={<Name newRecord={props.state.newRecord} setPage={function() { setState("start")}} dispatch={props.dispatch}/>}/>
                    <Route path="/records" element={<Records records={props.state.recordsData} newRecord={props.state.newRecord} dispatch={props.dispatch} setPage={function() { setState("start")}} />} />
                    <Route path="/about" element={<About setPage={function() { setState("start")}} /> }/>
                </Routes>
            </div>
        );
    }
    else if(props.state.newRecord.hasOwnProperty("result"))
    {
        return(
            <div className={`${classes.contents} ${classes.contents_geometry} block`}>
                <Routes>
                    <Route path="/" element={<Result  setPage={function() { setState("start")}} newRecord={props.state.newRecord} dispatch={props.dispatch} />}/>
                    <Route path="/records" element={<Records records={props.state.recordsData} newRecord={props.state.newRecord} dispatch={props.dispatch} setPage={function() { setState("start")}} />} />
                    <Route path="/about" element={<About setPage={function() { setState("start")}} /> }/>
                </Routes>
            </div>
        );
    }
    else if(state==="game")
    {
        return(
            <div className={`${classes.contents} ${classes.contents_geometry} block`}>
                <Routes>
                    <Route path="/" element={<Game setPage={function() { setState("name")}} dispatch={props.dispatch}/>}/>
                    <Route path="/records" element={<Records records={props.state.recordsData} newRecord={props.state.newRecord} dispatch={props.dispatch} setPage={function() { setState("start")}} />} />
                    <Route path="/about" element={<About setPage={function() { setState("start")}} /> }/>
                </Routes>
            </div>
        );
    }
    else
    {
        //Start
        return(
            <div className={`${classes.contents} ${classes.contents_geometry} block`}>
                <Routes>
                    <Route path="/" element={<Start  setPage={function() { setState("game")}} />}/>
                    <Route path="/records" element={<Records records={props.state.recordsData} newRecord={props.state.newRecord} dispatch={props.dispatch} setPage={function() { setState("start")}} />} />
                    <Route path="/about" element={<About setPage={function() { setState("start")}} /> }/>
                </Routes>
            </div>
        );
    }

}

export default Contents;

