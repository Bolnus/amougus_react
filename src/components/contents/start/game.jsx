import classes from './start.module.css';

import React from "react";

let gamePage__pushButton = [];
let buttons1 = [];
let buttons2 = [];
let chainCount = 0;
let fastTimer;
let gamePage__timer = React.createRef();
let cbSetPage;
let setRecord;

function on_pb_clicked(buttonNumber)
{
    return function()
    {
        chainCount++;
        if(gamePage__pushButton[buttonNumber].current.innerHTML==chainCount)
        {
            gamePage__pushButton[buttonNumber].current.style.background = 'blue';
            if(chainCount==10)
            {
                for(let i=0;i<gamePage__pushButton.length;i++)
                {
                    //const pb = document.querySelector("#"+buttonNames[i]);
                    gamePage__pushButton[i].current.disabled = 1;
                }
                //console.log(gamePage__timer.current.innerHTML);
                clearTimeout(fastTimer);

                setTimeout(userSucceeded, 400);
            }
        }
        else
        {
            userFailed(0);
            chainCount=0;
        }
    }

}

function createButtons()
{
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    for(let i=0;i<10;i++)
    {
        gamePage__pushButton[i] = React.createRef();
        let randomNumber = getRandomInt(numbers.length);
        let splicedElement = numbers.splice(randomNumber, 1)[0];
        //gamePage__pushButton[i+5] = React.createRef();
        if(i<5)
            buttons1[i]=<button className={classes.gamePage__pushButton} ref={gamePage__pushButton[i]} onClick={on_pb_clicked(i)} key={i}>{splicedElement}</button>;
        else
            buttons2[i-5]=<button className={classes.gamePage__pushButton} ref={gamePage__pushButton[i]} onClick={on_pb_clicked(i)} key={i}>{splicedElement}</button>;
    }

    // for(let i=0;numbers.length>0;i++)
    // {
    //     let randomNumber = getRandomInt(numbers.length);
    //     let splicedElement = numbers.splice(randomNumber, 1)[0];
    //     gamePage__pushButton[i].current.innerHTML=splicedElement;
    // }
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function stopWatch()
{
    if(gamePage__timer.current==null)
    {
        clearTimeout(fastTimer);
        return;
    }
    let oldTime = gamePage__timer.current.innerHTML.split(':');
    let minutes = oldTime[0];
    let seconds = oldTime[1];
    let milliseconds = oldTime[2];
    if(milliseconds=="995")
    {
        milliseconds="000";
        if(seconds=="59")
        {
            seconds="00";
            let intMinutes = parseInt(minutes);
            intMinutes++;
            minutes=String("00" + intMinutes).slice(-2);
        }
        else
        {
            let intSeconds = parseInt(seconds);
            intSeconds++;
            seconds=String("00" + intSeconds).slice(-2);
        }
    }
    else
    {
        let intMilliseconds = parseInt(milliseconds);
        intMilliseconds=intMilliseconds+5;
        milliseconds=String("000" + intMilliseconds).slice(-3);
    }
    gamePage__timer.current.innerHTML = minutes+':'+seconds+':'+milliseconds;
}

function userFailed(count)
{
    switch(count)
    {
        case 0:
        case 2:
        case 4:
            for(let i=0;i<gamePage__pushButton.length;i++)
            {
                const pb = gamePage__pushButton[i].current;
                pb.style.background = 'grey';
                if(count==0)
                    pb.disabled = 1;
                else if(count==4)
                    pb.disabled = 0;
            }
            break;
        case 1:
        case 3:
            for(let i=0;i<gamePage__pushButton.length;i++)
                gamePage__pushButton[i].current.style.background = 'red';
            break;
    }
    count++;
    if(count<5)
        setTimeout(userFailed, 400, count);
}

function userSucceeded()
{
    for(let i=0;i<gamePage__pushButton.length;i++)
    {
        //const pb = document.querySelector("#"+buttonNames[i]);
        gamePage__pushButton[i].current.style.background = "#0acc00";
    }
    //console.log(gamePage__timer.current.innerHTML);
    chainCount=0;
    setRecord(gamePage__timer.current.innerHTML.replace(/:/g,'-'));
    // if(!writeResult)
    cbSetPage();

    //let endTime = document.querySelector("#timer").innerHTML;
    //showResult(endTime);
}


function Game(props)
{
    cbSetPage=props.setPage;
    setRecord=props.recordSetter;
    clearTimeout(fastTimer);
    createButtons();
    chainCount=0;
    fastTimer = setInterval(stopWatch,5);
    //⟲
    return(
        <div className={`${classes.gamePage} ${classes.gamePage_geometry} page block`}>
            <div className={classes.gamePage__buttonLine}>
                {buttons1}
            </div>
            <div className={classes.gamePage__buttonLine}>
                {buttons2}
            </div>
            {/*<div className={`${classes.gamePage__timer} block`}>*/}
            <p className={`${classes.gamePage__timer} block`} ref={gamePage__timer}>00:00:000</p>
            {/*</div>*/}
        </div>
    );
}

export default Game;