import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import {createStore} from "redux";
import {unregister} from './registerServiceWorker';
import reducer from "./redux/reducer";
import {Provider} from 'react-redux'



const store = createStore(reducer)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render( app , document.getElementById('root'));

unregister();