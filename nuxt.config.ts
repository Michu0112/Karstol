// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        host: '0.0.0.0',
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    plugins: ['~/plugins/intersection-observer.js'],
    css: ['~/assets/scss/main.scss'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/icon'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/scss/variables.scss";@import "@/assets/scss/mixins/breakpoints.scss";',
                },
            },
        },
    },
    googleFonts: {
        families: {
            Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
    },
})
