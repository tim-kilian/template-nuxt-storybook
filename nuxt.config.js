export default {
    target: 'static',
    srcDir: 'src/',
    head: {
        title: 'template-nuxt',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: [],
    plugins: [],
    components: {
        components: [
            {
                path: '~/components/',
                prefix: '',
                extensions: [],
                pattern: '**/*.vue',
                ignore: [],
            },
        ],
    },
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss',
    ],
    modules: [],
    build: {},
};
