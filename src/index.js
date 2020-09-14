import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './router'

import 'antd/dist/antd.css';

ReactDOM.render(
    <HashRouter>
        { renderRoutes(routes) }
    </HashRouter>,
    document.getElementById("root")
);