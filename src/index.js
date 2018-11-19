import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter/ClickCounter';
import ControlPanel from './Views/ControlPanel';
import * as serviceWorker from './serviceWorker';
import Provider from './Provider';
import store from './Redux/Store';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
