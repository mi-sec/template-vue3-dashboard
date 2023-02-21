/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify';
import router  from '../router';
import pinia   from '../store';

import axios from 'axios';
import pino  from 'pino';

export function registerPlugins( app ) {
    app.config.globalProperties.$axios  = axios;
    app.config.globalProperties.$logger = pino( {
        level: process.env.NODE_ENV === 'production' ? 'error' : 'trace'
    } );

    pinia.use( () => ( {
        $axios: app.config.globalProperties.$axios,
        $logger: app.config.globalProperties.$logger
    } ) );

    app
        .use( vuetify )
        .use( router )
        .use( pinia );
}
