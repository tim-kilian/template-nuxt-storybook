import tailwindTypography from '@tailwindcss/typography';
import { faIcons } from './icons.config';

export default {
    target: 'static',
    srcDir: 'src/',
    globalName: 'nuxt',
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
    plugins: [
        '~plugins/filters.js',
        '~plugins/click-outside.js',
    ],
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
        '@nuxtjs/fontawesome',
    ],
    modules: [],
    build: {
        analyze: false, // npm run build --analyze
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
            },
        },
    },
    tailwindcss: {
        config: {
            future: {
                removeDeprecatedGapUtilities: true,
                purgeLayersByDefault: true,
                defaultLineHeights: true,
                standardFontWeights: true,
            },
        },
        theme: {
            extend: { },
        },
        variants: {
            transitionProperty: [ 'responsive', 'hover', 'focus' ],
        },
        plugins: [ tailwindTypography ],
    },
    fontawesome: {
        icons: faIcons,
    },
    storybook: {
        addons: [
            '@storybook/addon-a11y',
            '@storybook/addon-storysource',
        ],
    },
};
