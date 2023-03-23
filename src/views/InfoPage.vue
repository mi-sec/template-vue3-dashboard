<template>
    <v-container>
        env:

        <v-list
            v-for="(val, key) in env"
            :key="key"
        >
            <v-list-item>
                <code>{{ key }}</code>:
                <kbd class="font-weight-light">{{ val }}</kbd>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    name: 'InfoPage',
    data() {
        return {
            env: process.env
        };
    }
};
</script>
