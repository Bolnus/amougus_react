import About from "./about/about.jsx"
import Start from "./start/start.jsx"
import classes from "./contents.module.css";
import {Route, Routes} from "react-router-dom";
import React from "react";
import { useState } from "react"
import RecordsContainer from "./records/recordsContainer.jsx";
import GameContainer from "./start/gameContainer";
import ResultContainer from "./start/resultContainer";
import NameContainer from "./start/nameContainer";
import axios from "axios";

function Contents(props)
{
    //debugger;
    console.log("contents");
    //console.log(props.state.newRecord);

    if(!props.recordsData.length)
    {
        let initialRecords = {};
        axios.get("/recordsdata").then(function(response)
        {
            initialRecords = response.data.recordsData;
            props.setRecordsData(initialRecords);
        });

    }
    const [state, setState] = useState("start");

    if(props.newRecord.hasOwnProperty("name")) //state==="name"
    {
        return(
            <div className={`${classes.contents} ${classes.contents_geometry} block`}>
                <Routes>
                    <Route path="/" element={<NameContainer setPage={function() { setState("start")}}/>}/>
                    <Route path="/records" element={<RecordsContainer setPage={function() { setState("start")}} />} />
                    <Route path="/about" element={<About setPage={function() { setState("start")}} /> }/>
                </Routes>
            </div>
        );
    }
    else if(props.newRecord.hasOwnProperty("result"))
    {
        return(
            <div className={`${classes.contents} ${classes.contents_geometry} block`}>
                <Routes>
                    <Route path="/" element={<ResultContainer  setPage={function() { setState("start")}}  />}/>
                    <Route path="/records" element={<RecordsContainer  setPage={function() { setState("start")}} />} />
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
                    <Route path="/" element={<GameContainer setPage={function() { setState("name")}} />}/>
                    <Route path="/records" element={<RecordsContainer  setPage={function() { setState("start")}} />} />
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
                    <Route path="/records" element={<RecordsContainer  setPage={function() { setState("start")}} />} />
                    <Route path="/about" element={<About setPage={function() { setState("start")}} /> }/>
                </Routes>
            </div>
        );
    }

}

export default Contents;

