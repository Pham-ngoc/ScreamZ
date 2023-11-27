// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        head:{
            meta: [

                {name: 'naive-ui-style'},
                {name: 'vue-style'},
            ]
        }

    },
    ssr: false,
    css: ['~/assets/css/main.css'],

    vite: {
        define: {
            global: 'globalThis',
        },
        $client: {

        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/image',

    ],
    pinia: {
        autoImports: ["defineStore", "storeToRefs"],
        storesDirs: ["~/stores"],
    },
    imports: {
        dirs: ["stores"]

    },
    tailwindcss: {

        viewer: false,
        darkMode: 'class',

    },
    plugins: [

        {src: "~/plugins/navie.js"},
    ]
})
