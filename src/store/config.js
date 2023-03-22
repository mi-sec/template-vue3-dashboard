// Utilities
import { defineStore } from 'pinia';

export const useConfigStore = defineStore( 'config', {
    state: () => ( {
        title: process.env.VITE_APP_TITLE,
        version: `v${ process.env.VITE_APP_VERSION }`,
        repoUrl: process.env.VITE_APP_REPOSITORY || '/',
        appbar: {
            color: '',
            density: 'compact'
        },
        footer: {
            inset: false,
            height: 26
        }
    } ),
    actions: {
        async getConfig() {
            this.$logger.info( `[${ this.$id }] actions.getConfig` );
            try {
                const { data } = await this.$axios.get( 'config.json' );
                Object.assign( this, data );
            }
            catch ( e ) {
                this.$logger.error( e );
            }
        }
    }
} );
