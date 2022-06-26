import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import store from "./redux/redux-store.js"; //
import Header from './components/header/header.jsx';
import MainMenu from './components/main_menu/main-menu.jsx'; //./components/main_menu/main-menu.jsx
import Contents from './components/contents/contents.jsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


function rerenderEntireTree(currentState)
{
    return ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <MainMenu dispatch={store.dispatch.bind(store)}/>
                <Contents state={currentState.records} dispatch={store.dispatch.bind(store)}/>
            </ BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

function rerenderStore()
{
    let state = store.getState();

    rerenderEntireTree(state);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderStore);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
