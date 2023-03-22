<template>
    <v-footer
        app
        class="pt-0 pb-0"
        :inset="config.footer.inset"
        :height="config.footer.height"
    >
        <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>

        <v-spacer></v-spacer>

        <v-btn
            :height="config.footer.height"
            :width="config.footer.height"
            class="mr-5"
            variant="text"
            rounded="0"
            size="x-small"
            icon="mdi-invert-colors"
            aria-label="invert-colors"
            @click="toggleTheme"
        >
        </v-btn>

        <v-btn
            :height="config.footer.height"
            :width="config.footer.height"
            class="mr-5"
            variant="text"
            rounded="0"
            size="x-small"
            aria-label="app-version"
            :href="config.repoUrl"
        >
            {{ config.version }}
        </v-btn>

        <span class="text-overline">{{ now }}</span>
    </v-footer>
</template>

<script>
import { storeToRefs }    from 'pinia';
import { useConfigStore } from '@/store/config';
import { useTheme }       from 'vuetify';
import moment             from 'moment';

export default {
    name: 'AppFooter',
    data() {
        const theme = useTheme();

        return {
            config: storeToRefs( useConfigStore() ),
            now: moment().format( 'D MMM YYYY, HH:mm:ss' ),
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        };
    },
    mounted() {
        this.timeInterval = setInterval(
            () => this.now = moment().format( 'D MMM YYYY, HH:mm:ss' ),
            60
        );
    },
    beforeUnmount() {
        clearInterval( this.timeInterval );
    }
};
</script>
