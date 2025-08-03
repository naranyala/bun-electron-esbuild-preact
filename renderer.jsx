
import "./raw-reset-legacy.css"
// import "./raw-reset.css"
import "./raw-main.css"

import { h, render, Fragment } from 'preact';

// pick one of them
import { App } from "./app-01/App.jsx"
// import { App } from "./app-02/App.jsx"
// import { App } from "./app-03/App.jsx"

render(h(App), document.getElementById('app'));
