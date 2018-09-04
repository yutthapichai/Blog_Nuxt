const pkg = require('./package')

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: 'App_Yut',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: 'Web development Blog' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Nunito",
        rel: "stylesheet"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#33ccff", height: '4px' },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/styles/main.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-a4985.firebaseio.com'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
};
