// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['radix-vue/nuxt'],
  alias: {
    assets: "/<rootDir>/assets"
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/main.scss', '@/assets/app.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
