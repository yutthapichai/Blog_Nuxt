const pkg = require('./package')
//const bodyParser = require("body-parser")

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "App_Yut",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Web development Blog"
      }
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
  loading: { color: "#33ccff", height: "4px" },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f"
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/styles/main.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  /*
  ** Nuxt.js modules
  */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: process.env.BASE_URL || "https://nuxt-blog-a4985.firebaseio.com",
    credentials: false
  },
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
    baseUrl: process.env.BASE_URL || "https://nuxt-blog-a4985.firebaseio.com",
    fbAPIKey: "AIzaSyCTcwGbndxawDa-yS3F0ykGdjosMvskUO4"
  },
  transition: {
    // when open new page will fade animation
    name: "fade",
    mode: "out-in"
  }
  //router: {
  //  middleware: 'log'
  //}
  //serverMiddleware: [bodyParser.json(),"~/api"]
};
