import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App/App';
import 'semantic-ui-css/semantic.min.css';
/* Font Css */
import './fonts/FontFile.css';
/* Font Css */
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import {BrowserRouter} from 'react-router-dom';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const store=configureStore;
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
