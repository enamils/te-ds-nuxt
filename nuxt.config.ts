// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ['@/assets/main.scss', '@/assets/app.css' ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
