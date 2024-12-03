// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: ['bootstrap/dist/css/bootstrap.min.css'],
  alias: {
    assets: "/<rootDir>/assets"
  },
  devtools: {
    enabled: true
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
  compatibilityDate: '2024-11-01'
})