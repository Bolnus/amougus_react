import {clearRecordActionCreator} from "../../redux/records-reducer.js";
import MainMenu from "./main-menu.jsx";
import {connect} from "react-redux";

// function MainMenuContainerLegacy(props)
// {
//     //let navigate = useNavigate();
//     function clearRecord()
//     {
//         props.store.dispatch(clearRecordActionCreator()); //.bind(store)
//     }
//     //<NavLink to="/" >
//     return(
//         <MainMenu clearRecord={clearRecord}/>
//     )
// }

function mapDispatchToProps(dispatch)
{
    return {
        clearRecord() {dispatch(clearRecordActionCreator())}
    }
}

const MainMenuContainer = connect(null,mapDispatchToProps)(MainMenu);

export default MainMenuContainer;