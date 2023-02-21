<template>
    <router-view/>
</template>

<script>
import { mapActions }     from 'pinia';
import { useConfigStore } from '@/store/config';

export default {
    name: 'App',
    data() {
        return {};
    },
    async mounted() {
        await this.getConfig();
    },
    methods: {
        ...mapActions( useConfigStore, [ 'getConfig' ] )
    }
};
</script>

<style>
html, body {
    overflow: hidden;
}
</style>
