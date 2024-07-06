// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/style.css',
  ],
  modules: ["@nuxt/image", "vuetify-nuxt-module", 'nuxt-swiper'],
  vuetify: {
    vuetifyOptions: {
      components: ['VDialog', 'VBtn', 'VIcon'],
      icons: {
        defaultSet: 'fa'
      }
    }
  },
  "app": {
    "head": {
      "viewport": "width=device-width, initial-scale=1",
      "title": "서지유 🤍 조수현",
      "meta": [
          { "name": "description", "content": "서지유, 조수현 결혼합니다." },
          { "property": "og:title", "content": "서지유, 조수현 결혼합니다." },
          { "property": "og:url", "content": "http://localhost:3000/" },
          { "property": "og:description", "content": "서지유, 조수현 결혼합니다." },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "favicon.ico" },
      ],
    },
    baseURL: '/tngus_nanunju/',
    buildAssetsDir: 'assets' 
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      websiteName: process.env.NUXT_PUBLIC_WEBSITE_NAME || '서지유 🤍 조수현',
      websiteDescription: process.env.NUXT_PUBLIC_WEBSITE_DESCRIPTION || '서지유 🤍 조수현',
      apiUrl: process.env.NUXT_API_URL,
      imgUrl: process.env.NUXT_PICTURE_URL || 'http://localhost:3000',
    },
    dbURL: process.env.DATABASE_URL,
  },
  routeRules: {
    // '/': { prerender: true, isr: true },
    '/api/**': { cors: true },
  }
})