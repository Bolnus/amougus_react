import Records from "./records.jsx";
import {connect} from "react-redux";

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
        recordsData: state.records.recordsData
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