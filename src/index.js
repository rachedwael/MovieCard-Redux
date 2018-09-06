import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux"
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import movieAppStore from './store'
ReactDOM.render(
<Provider store={movieAppStore} >
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

