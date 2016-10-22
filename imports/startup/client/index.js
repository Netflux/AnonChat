import { Meteor } from 'meteor/meteor';
import { renderRoutes } from '../routes.jsx';

// Render the routes on the client-side
Meteor.startup(() => {
    renderRoutes();
});
