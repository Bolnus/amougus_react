import imageSrc from "../pixmaps/loader.svg";
import React from "react";
import classes from "./loading.module.css"

function Loading(props)
{
    //className={classes.startPage__image}
    return(
        <div className="page block">
            <img className={classes.loadingPage__image} src={imageSrc}/>
        </div>
    );
}

export default Loading;