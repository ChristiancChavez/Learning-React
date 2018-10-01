/* eslint react/jsx-filename-extension: "off" */
/* global document */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRoutes from './routes';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const unmountButton = document.getElementById('unmount');

function unmount() {    
    ReactDOM.unmountComponentAtNode(      
        document.getElementById('root')    
    );    
    document.getElementById('unmountMessage').style.display = 'block';
    unmountButton.remove();  
}
    unmountButton.addEventListener('click', unmount);
    document.getElementById('unmountMessage').style.display = 'none';

    render(  
        <Router>    
            <AppRoutes />  
        </Router>,  
        document.getElementById('root') 
    );

