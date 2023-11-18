// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: false},
    ssr: false,
    css: ['~/assets/css/main.css'],

    vite: {
        define: {
            global: 'globalThis',
        },
        $client: {}
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/image',

    ],
    pinia: {
        autoImports: [
            'defineStore',
            'storeToRefs'
        ],
        storesDirs: ['./composables/**']
    },
    tailwindcss: {

        viewer: false,
        darkMode: 'class',

    }
})
