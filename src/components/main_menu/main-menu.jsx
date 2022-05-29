import classes from './main-menu.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {clearRecordActionCreator} from "../../redux/state";

function MainMenu(props)
{
    let navigate = useNavigate();
    function playClicked(event)
    {
        event.preventDefault();
        //console.log("writeRec");
        props.dispatch(clearRecordActionCreator());
        navigate("/");
    }
    //<NavLink to="/" >
    return(
        <div className={`${classes.mainMenu} ${classes.mainMenu_geometry} block`}>
            <ul className={classes.listMenu}>
                <li className={classes.listMenu__start} onClick={playClicked}>Play</li>
                <li className={classes.listMenu__records}><NavLink to="/records">Records</NavLink></li>
                <li className={classes.listMenu__about}><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default MainMenu;