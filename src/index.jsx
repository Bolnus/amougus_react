//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import './main.css';
//import App from './App';
//import Header from './components/header/header.jsx';
//import MainMenu from './components/main_menu/main-menu.jsx'; //./components/main_menu/main-menu.jsx
//import Contents from './components/contents/contents.jsx';
import reportWebVitals from './reportWebVitals';
//import {BrowserRouter} from "react-router-dom";
import state from "./redux/state.jsx";
import {rerenderEntireTree} from "./render.jsx";

rerenderEntireTree(state);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
