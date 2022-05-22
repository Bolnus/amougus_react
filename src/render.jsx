import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './main.css';
import App from './App';
import Header from './components/header/header.jsx';
import MainMenu from './components/main_menu/main-menu.jsx'; //./components/main_menu/main-menu.jsx
import Contents from './components/contents/contents.jsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {prepareRecord} from "./redux/state.jsx";
import {writeRecord} from "./redux/state.jsx";
import {updateNewRecordName} from "./redux/state.jsx";
import {clearRecord} from "./redux/state.jsx"

export function rerenderEntireTree(state)
{
    return ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <MainMenu clearRecord={clearRecord}/>
                <Contents records={state.recordsData} newRecord={state.newRecord} updateNewRecordName={updateNewRecordName} recordSetter={prepareRecord} writeRecord={writeRecord} clearRecord={clearRecord}/>
            </ BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;