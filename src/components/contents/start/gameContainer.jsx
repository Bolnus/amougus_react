import React from "react";
import {prepareRecordActionCreator} from "../../../redux/records-reducer";
import Game from "./game.jsx";

let cb_dispatch;

function prepareRecord(result)
{
    cb_dispatch(prepareRecordActionCreator(result));
}

function GameContainer(props)
{
    cb_dispatch=props.store.dispatch;

    //⟲
    return(
        <Game setPage={props.setPage} prepareRecord={prepareRecord}/>
    );
}

export default GameContainer;