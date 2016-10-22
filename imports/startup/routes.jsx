import React from 'react';
import ReactHelmet from 'react-helmet';
import { Router, Route, IndexRoute } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

// Import main components
import BaseApp from '../ui/pages/BaseApp.jsx';

// Define routes for application
const routes = (
	<Route path="/" component={BaseApp}></Route>
);

// Render routes on client and server
export const renderRoutes = () => (
	ReactRouterSSR.Run(routes, {
        rootElement: "app"
    }, {
        htmlHook(html) {
            const head = ReactHelmet.rewind();
            return html.replace('<head>', '<head>' + head.title + head.base + head.meta + head.link + head.script);
        }
    })
);
