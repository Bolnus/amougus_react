import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import store from "./redux/redux-store.js"; //
import Header from './components/header/header.jsx';
import MainMenuContainer from './components/main_menu/mainMenuContainer.jsx'; //./components/main_menu/main-menu.jsx
import Contents from './components/contents/contents.jsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"

function rerenderEntireTree(currentState)
{
    //dispatch={store.dispatch.bind(store)}
    //store={store}
    //state={currentState.records} store={store}
    return ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <MainMenuContainer />
                    <Contents state={currentState.records}/>
                </Provider>
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
