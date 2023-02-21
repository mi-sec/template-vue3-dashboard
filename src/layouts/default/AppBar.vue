<template>
    <v-app-bar
        app
        :clipped-left="config.appbar.clipped"
        :dense="config.appbar.dense"
    >
        <v-app-bar-nav-icon
            aria-label="nav"
            @click="config.sidebar.model = !config.sidebar.model"
        />

        <v-toolbar-title class="headline">
            <span>{{ title }}</span>
            <span class="font-weight-light">{{ version }}</span>
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

<script setup>
import { storeToRefs }    from 'pinia';
import { useConfigStore } from '@/store/config';

const config = storeToRefs( useConfigStore() );

const title   = config.title.value;
const version = config.version.value;
</script>
