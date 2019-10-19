/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
);
