
import "./raw-reset-legacy.css"
// import "./raw-reset.css"
import "./raw-main.css"

import { h, render, Fragment } from 'preact';

// pick one of them
// import { App } from "./App.jsx"
import { App } from "./app-01/App.jsx"
import { App } from "./app-02/App.jsx"

render(h(App), document.getElementById('app'));
