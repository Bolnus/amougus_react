import classes from "./records.module.css";

function RecordRow(props)
{
    if(props.newRow===props.row-1)
    {
        return(
            <tr className={classes.recordsPage__highlightedRow}>
                <td>{props.row}</td>
                <td>{props.date+' '+props.time }</td>
                <td>{props.result}</td>
                <td>{props.name}</td>
            </tr>
        );
    }
    else
    {
        return(
            <tr>
                <td>{props.row}</td>
                <td>{props.date+' '+props.time }</td>
                <td>{props.result}</td>
                <td>{props.name}</td>
            </tr>
        );
    }

}

export default RecordRow;