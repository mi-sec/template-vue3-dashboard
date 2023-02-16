'use strict';

import pack from './package.json';

// Plugins
import vue                             from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// Utilities
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL }    from 'node:url';

process.env.VITE_APP_TITLE       = pack.name;
process.env.VITE_APP_DESCRIPTION = pack.description;
process.env.VITE_APP_VERSION     = pack.version;
process.env.VITE_APP_REPOSITORY  = pack.homepage;

function htmlPlugin( env ) {
    return {
        name: 'html-transform',
        transformIndexHtml: {
            enforce: 'pre',
            transform: ( html ) => html.replace( /%(.*?)%/g, ( match, p1 ) => env[ p1 ] ?? match )
        }
    };
}

// https://vitejs.dev/config/
export default defineConfig( ( { command, mode } ) => {
    const env = loadEnv( mode, process.cwd(), '' );

    const overrides = {};

    if ( command === 'build' && env.GITHUB_ACTIONS === 'true' ) {
        overrides.base = `/${ env.GITHUB_REPOSITORY.split( '/' ).pop().trim() }/`;
    }

    return {
        mode: command === 'build' ? 'production' : 'development',
        plugins: [
            vue( {
                template: { transformAssetUrls }
            } ),
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
            vuetify( {
                autoImport: true,
                styles: {
                    configFile: 'src/styles/settings.scss'
                }
            } ),
            htmlPlugin( env )
        ],
        define: {
            'process.env': {
                VITE_APP_TITLE: process.env.VITE_APP_TITLE,
                VITE_APP_DESCRIPTION: process.env.VITE_APP_DESCRIPTION,
                VITE_APP_VERSION: process.env.VITE_APP_VERSION,
                VITE_APP_REPOSITORY: process.env.VITE_APP_REPOSITORY
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath( new URL( './src', import.meta.url ) )
            },
            extensions: [
                '.js',
                '.json',
                '.jsx',
                '.mjs',
                '.ts',
                '.tsx',
                '.vue'
            ]
        },
        server: {
            port: 3000
        },
        ...overrides
    };
} );
