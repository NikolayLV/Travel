import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {
    root.render(
        <BrowserRouter basename="/Travel">
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}
rerenderDOM(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderDOM(state)
});



