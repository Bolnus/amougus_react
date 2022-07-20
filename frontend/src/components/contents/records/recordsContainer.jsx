import Records from "./records.jsx";
import {connect} from "react-redux";
import {setFetchingStateActionCreator} from "../../../redux/records-reducer";

// function RecordsContainerLegacy(props)
// {
//     return (
//         <Records newRecord={props.store.getState().records.newRecord} recordsData={props.store.getState().records.recordsData} setPage={props.setPage}/>
//     )
// }

function mapStateToProps(state)
{
    return {
        newRecord: state.records.newRecord,
        recordsData: state.records.recordsData,
        isFetching: state.records.isFetching
    }
}

function mapDispatchToProps(dispatch, ownProps)
{
    return {
        setPage: ownProps.setPage
    }
}

const RecordsContainer = connect(mapStateToProps,mapDispatchToProps)(Records);

export default RecordsContainer;