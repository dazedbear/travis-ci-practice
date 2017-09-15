import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar'
import Footer from './Footer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('nav'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
