import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import store from "./redux/redux-store.js"; //
import Header from './components/header/header.jsx';
import MainMenuContainer from './components/main_menu/mainMenuContainer.jsx'; //./components/main_menu/main-menu.jsx
import ContentsContainer from './components/contents/contentsContainer.jsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"

//state={store.getState().records}
 ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <MainMenuContainer />
                    <ContentsContainer />
                </Provider>
            </ BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );


window.store=store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
