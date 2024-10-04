// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss:{
    cssPath:"~/assets/css/tailwind.css",
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition:0,
    viewer:true
  },
  css: ['@/assets/css/base.css', '@/assets/css/webflow.css', '@/assets/css/normalize.css', '@/assets/css/mdlr-28e2c3.webflow.css'],

  googleFonts: {
    families: {
      Roboto: true,
      'Space Mono':[300, 400, 600, 700, 800],
    },
    display: 'swap',
    prefetch: true,
    preload: true,
  },
})