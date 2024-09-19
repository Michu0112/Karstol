// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    appId: 'Karstol',
    devServer: {
        host: '0.0.0.0',
    },
    runtimeConfig: {
        public: {
            gtagId: 'G-C55TJRJH2B',
        },
    },
    site: {
        url: 'https://karstol.com',
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    plugins: ['~/plugins/intersection-observer.js', '~/plugins/gtag.client.js'],
    css: ['~/assets/scss/main.scss'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
        '@nuxtjs/seo',
    ],
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
    robots: {
        blockNonSeoBots: true,
        groups: [
            {
                userAgent: '*', // Targets all bots
                allow: '/', // Allows all pages
                disallow: [],
            },
        ],
    },
})
