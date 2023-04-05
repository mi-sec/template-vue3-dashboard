<template>
    <v-system-bar
        app
        class="pt-0 pb-0"
        :height="config.systembar.height"
        :color="config.systembar.backgroundColor"
        elevation="1"
    >
        <v-spacer></v-spacer>
        <span
            :class="[
                'overline',
                'font-weight-bold',
                `text-${ config.systembar.textColor || 'white' }`
            ]"
        >
            {{ config.systembar.text }}
        </span>
        <v-spacer></v-spacer>
    </v-system-bar>
</template>

<script>
import { storeToRefs }    from 'pinia';
import { useConfigStore } from '@/store/config';

export default {
    name: 'AppSystemBar',
    data() {
        return {
            config: storeToRefs( useConfigStore() )
        };
    }
};
</script>
