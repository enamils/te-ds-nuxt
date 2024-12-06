<script setup lang="ts">
  useHead({
    meta: [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }],
    link: [{
      rel: 'icon',
      href: '/favicon.ico'
    }],
    htmlAttrs: {
      lang: 'en'
    }
  })

  useSeoMeta({
    ogImage: 'https://landing-template.nuxt.dev/social-card.png',
    twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
    twitterCard: 'summary_large_image'
  })
</script>

<template>
  <AppHeader />

  <UMain>
    <ULandingSection>
      <TabsUIExtend
        :ui="{
          list: {
            background: 'bg-[#F2F5F6]',
            marker: { background: 'bg-[#285AFF]' },
            tab: { active: 'text-white', font: 'font-bold' }
          }
        }"
        class-container="md:w-6/12"
      />

      <TabsUIExtend
        :ui="{
          list: {
            background: 'bg-[#F2F5F6]',
            marker: { background: 'bg-[#E9F2FF]' },
            tab: { active: 'text-[#285AFF]', font: 'font-bold' }
          }
        }"
        class-container="md:w-6/12"
      />
    </ULandingSection>
  </UMain>

  <AppFooter />
</template>
