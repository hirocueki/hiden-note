const environment = process.env.NODE_ENV || 'development'
const envSet = require(`./env.${environment}.ts`)

export default {
  ssr: false,
  head: {
    title: 'hiden-note',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: envSet,
  css: [],
  plugins: ['firebase'],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: [['bootstrap-vue/nuxt', { icons: true }], '@nuxtjs/markdownit'],
  build: {
    babel: {
      babelrc: false,
      compact: false,
    },
  },
  router: {
    middleware: 'auth',
  },
}
