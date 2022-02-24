export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "/-/.SE",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://module-function.herc.se/scss/style.css"},
      { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css"}
    ],
    // custom
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"
      }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [
    "@nuxt/http",
    "@nuxt/content"
    // '@nuxtjs/pwa'
  ],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  // custom
  css: ["~/assets/main.css",
        "~/assets/theme.css"
      ],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [
    { src: "~/assets/main.js", mode: "client", ssr: false },
    { src: "~/assets/menu.js", mode: "client", ssr: false }
    // ,{ src: "~/assets/client.js", mode: "client" }
  ],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Archivo:{
        wght: [400, 500],
        ital: [400, 500]
      }
    }
  },
  target: "static" // default is 'server'
  // router: {
  //   base: "/csb-xmztef/"
  // }
};
