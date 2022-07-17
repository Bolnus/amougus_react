import React from "react";
import {prepareRecordActionCreator} from "../../../redux/records-reducer";
import Game from "./game.jsx";
import {connect} from "react-redux";

// let cb_dispatch;
//
// function prepareRecord(result)
// {
//     cb_dispatch(prepareRecordActionCreator(result));
// }
//
// function GameContainerLegacy(props)
// {
//     cb_dispatch=props.store.dispatch;
//
//     //⟲
//     return(
//         <Game setPage={props.setPage} prepareRecord={prepareRecord}/>
//     );
// }


function mapDispatchToProps(dispatch, ownProps)
{
    return {
        setPage: ownProps.setPage,
        prepareRecord(result)
        {
            //debugger;
            dispatch(prepareRecordActionCreator(result))
        }
    }
}

const GameContainer = connect(null,mapDispatchToProps)(Game);

export default GameContainer;