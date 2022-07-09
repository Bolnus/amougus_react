import classes from './main-menu.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {clearRecordActionCreator} from "../../redux/records-reducer.js";
import MainMenu from "./main-menu.jsx";
import store from "../../redux/redux-store";

function MainMenuContainer(props)
{
    //let navigate = useNavigate();
    function clearRecord()
    {
        props.store.dispatch(clearRecordActionCreator()); //.bind(store)
    }
    //<NavLink to="/" >
    return(
        <MainMenu clearRecord={clearRecord}/>
    )
}

export default MainMenuContainer;