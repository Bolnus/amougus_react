import store from "./redux/state.jsx";
import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Header from './components/header/header.jsx';
import MainMenu from './components/main_menu/main-menu.jsx'; //./components/main_menu/main-menu.jsx
import Contents from './components/contents/contents.jsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {prepareRecord} from "./redux/state.jsx";
import {writeRecord} from "./redux/state.jsx";
import {updateNewRecordName} from "./redux/state.jsx";
import {clearRecord} from "./redux/state.jsx"
import {subscribe} from "./redux/state.jsx"

function rerenderEntireTree(currentStore)
{
    return ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <MainMenu clearRecord={currentStore.clearRecord.bind(currentStore)}/>
                <Contents store={currentStore}/>
            </ BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
