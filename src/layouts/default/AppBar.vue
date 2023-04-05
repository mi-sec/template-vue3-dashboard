<template>
    <v-app-bar
        :color="config.appbar.color"
        :density="config.appbar.density"
    >
        <v-toolbar-title class="headline">
            <span>{{ config.title }}</span>
            <span class="font-weight-light">{{ config.version }}</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/" tile aria-label="home">
                Home
            </v-btn>
            <v-btn to="/info" tile aria-label="info">
                Info
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import { storeToRefs }    from 'pinia';
import { useConfigStore } from '@/store/config';

export default {
    name: 'AppBar',
    data() {
        return {
            config: storeToRefs( useConfigStore() )
        };
    }
};
</script>
