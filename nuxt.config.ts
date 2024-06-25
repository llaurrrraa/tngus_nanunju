// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/style.css',
  ],
  // modules: ['@nuxt/ui'],
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
  "nitro": {
    "plugins": ["~/server/db/index.js"],
  },  
})