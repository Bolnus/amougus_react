import classes from './start.module.css';
import imageSrc from '../../../pixmaps/start.png';
import React from "react";
import Game from "./game.jsx"

//var pageHeight = document.querySelector(`.${classes.startPage}`).offsetHeight;
//var imgHeight = document.querySelector(`.${classes.startPage__image}`).offsetHeight;
//console.log("img height:"+imgHeight);
//var imgPosition = (pageHeight-imgHeight)/2;
let imageTimer;
let imageCount = 0;
let defaultImageWidth = 60;//document.querySelector(`.${classes.startPage__image}`).offsetWidth;
let startPage__image = React.createRef();
let cbFunction;

function on_start_clicked()
{
    console.log("start clicked");
    cbFunction();
    //setPage();
    //Start({current: "game"});
}



function imageHover()
{
    //надо вынести это,чтобы выполнялось однократно при монтирвоании:
    defaultImageWidth=startPage__image.current.offsetHeight;
    imageTimer = setInterval(increaseImage,12);
}

function increaseImage()
{
    imageCount++;
    //let image = document.querySelector("#image");
    if(startPage__image.current!=null)
        startPage__image.current.style.width = (startPage__image.current.offsetWidth+imageCount)+"px";
    if(imageCount>10||startPage__image.current==null)
    {
        clearTimeout(imageTimer);
        //console.log("animation finished");
    }
}

function resetImage()
{
    clearTimeout(imageTimer);
    imageCount=0;
    //console.log("default width:"+defaultImageWidth);
    //var image = document.querySelector("#image");
    startPage__image.current.style.width = defaultImageWidth+"px";
}

function Start(props)
{
    cbFunction=props.setPage;
    // if(props.current==="game")
    // {
    //     return(<Game />);
    // }
    // else
    // {
        return(
            <div className={`${classes.startPage} page block`}>
                <img className={classes.startPage__image} src={imageSrc} ref={startPage__image} onClick={on_start_clicked} onMouseOver={imageHover} onMouseOut={resetImage}/>
            </div>
        );
    // }

}

export default Start;