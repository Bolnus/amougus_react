import classes from './start.module.css';
import React from "react";
import {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

let buttonUps = [];
let buttonDowns = [];
let letters = [];
let namePage__letter = [];
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
let nameStr;
//let cb_updateName;
let dispatch;
let count = -1;

for(let i=0;i<3;i++)
{
    namePage__letter[i] = React.createRef();
    buttonUps[i]=<button className={classes.namePage__pushButton} onClick={on_pbUp_clicked(i)} key={i}>▲</button>;
    buttonDowns[i]=<button className={classes.namePage__pushButton} onClick={on_pbDown_clicked(i)} key={i}>▼</button>;
}


function on_pbUp_clicked(number)
{
    //console.log(namePage__letter[letterNumber].current.offsetWidth);
    return function()
    {
        let nameStr1=['A','A','A']; //"AAA";//
        for(let i=0;i<namePage__letter.length;i++)
            nameStr1[i]=nameStr[i];//namePage__letter[number].current.innerHTML;
        //console.log(nameStr1.join(''));
        let currentLetterNumber = alphabet.indexOf(nameStr1[number]); //namePage__letter[number].current.innerHTML
        currentLetterNumber++;
        if(currentLetterNumber===alphabet.length)
            nameStr1[number]=alphabet[0]; //namePage__letter[number].current.innerHTML
        else
            nameStr1[number]=alphabet[currentLetterNumber]; //namePage__letter[number].current.innerHTML
        //console.log(nameStr1.join(''));
        dispatch({type: "UPDATE-NEW-RECORD-NAME",newName: nameStr1.join('')});
        //cb_updateName(nameStr1.join(''));//
    }

}

function on_pbDown_clicked(number)
{
    return function()
    {
        let nameStr1=['A','A','A']; //"AAA";//
        for(let i=0;i<namePage__letter.length;i++)
            nameStr1[i]=nameStr[i];//namePage__letter[number].current.innerHTML;
        //console.log(nameStr1.join(''));
        let currentLetterNumber = alphabet.indexOf(nameStr1[number]); //namePage__letter[number].current.innerHTML
        currentLetterNumber--;
        if(currentLetterNumber===-1)
            nameStr1[number]=alphabet[alphabet.length-1]; //namePage__letter[number].current.innerHTML
        else
            nameStr1[number]=alphabet[currentLetterNumber]; //namePage__letter[number].current.innerHTML
        //cb_updateName(nameStr1.join(''));
        dispatch({type: "UPDATE-NEW-RECORD-NAME",newName: nameStr1.join('')});
    }
}

function clearName()
{
    for(let i=0;i<3;i++)
    {

        buttonUps[i]=<button className={classes.namePage__pushButton} onClick={on_pbUp_clicked(i)} key={i}>▲</button>;
        buttonDowns[i]=<button className={classes.namePage__pushButton} onClick={on_pbDown_clicked(i)} key={i}>▼</button>;
        letters[i]=<div className={classes.namePage__letterArea} key={i}>
            <p className={classes.namePage__letter} ref={namePage__letter[i]} key={i}>{nameStr[i]}</p>
        </div>;
    }
}

function tagsGetter(newRec)
{
    count++;
    return (
        <div className={classes.namePage__letterArea} key={count}>
            <p className={classes.namePage__letter} ref={namePage__letter[count]} key={count}>{newRec}</p>
        </div>
    );
}

// function writeRec(hist)
// {
//     console.log("writeRec");
//     cb_writeRec();
//     hist.push("/records");
// }

function Name(props)
{
    nameStr=props.newRecord.name;
    //console.log("props name:"+nameStr);
    dispatch=props.dispatch;
    //cb_updateName=props.updateNewRecordName;
    // clearName();
    let lettersArray = [];
    for(let i=0;i<props.newRecord.name.length;i++)
        lettersArray[i]=props.newRecord.name[i];
    let lettersTags = lettersArray.map(tagsGetter);
    count = -1;

    let navigate = useNavigate();
    function writeRec(event)
    {
        event.preventDefault();
        console.log("writeRec");
        props.dispatch({type: "WRITE-RECORD"});

        navigate("/records");
        //props.setPage();
    }

    //console.log("buttonUp:"+lettersObject[0].buttonUp);
    return(
        <div className={`${classes.namePage} page block`}>
            <div className={classes.namePage__window}>
                <div className={classes.namePage__hat}>
                    <p className={classes.namePage__header}>{`#${props.newRecord.place+1} ${props.newRecord.result}`}</p>
                </div>
                {buttonUps}
                {lettersTags}
                {buttonDowns}
                {/*<NavLink to="/records" role={"button"} className={classes.namePage__pushButtonOk}>Ok</NavLink>*/}
                <button className={classes.namePage__pushButtonOk} onClick={writeRec}>Ok</button>
            </div>
        </div>
    );
    //<Link to="/records">
}

export default Name;