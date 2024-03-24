// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Montserrat: true,
                    "Open Sans": true,
                },
            },
        ],
        ["nuxt-svgo", {}],
    ],

    components: [
        {
            path: "/components",
            pathPrefix: false,
        },
    ],

    devtools: { enabled: true },
});
