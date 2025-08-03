
import "./styles-reset.css"
import "./styles-main.css"

import { h, render, Fragment, } from 'preact';
import { App } from "./App.jsx"

render(h(App), document.getElementById('app'));
