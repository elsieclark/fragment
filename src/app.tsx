import { h, render } from "preact";
import AsyncRoute from 'preact-async-route';
import Router from 'preact-router';

import Home from './pages/home';

import('./pages/third').then(third => console.log('Third loaded'));

const Main = () => (
    <div>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/other">Other</a></li>
        <li><a href="/third">Third</a></li>
    </ul>
    <Router>
        <Home path="/" />
        <AsyncRoute
            path="/other"
            getComponent={() => import('./pages/other').then(module => module.default)}
        />
    </Router>
    </div>
);

render(<Main />, document.body);
