<template>
    <v-app>
        <AppSystemBar/>
        <AppBar/>
        <AppView/>
        <AppFooter/>
    </v-app>
</template>

<script setup>
import AppSystemBar from '@/layouts/default/AppSystemBar.vue';
import AppBar       from '@/layouts/default/AppBar.vue';
import AppView      from '@/layouts/default/AppView.vue';
import AppFooter    from '@/layouts/default/AppFooter.vue';
</script>
