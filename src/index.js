import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderreducer from './Store/reducer/burgerBuilder'
import orderReducer from './Store/reducer/order'
import authReducer from './Store/reducer/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ( {
burgerBuilder:burgerBuilderreducer,
order:orderReducer,
auth:authReducer
})

const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
) );



const app = (
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
