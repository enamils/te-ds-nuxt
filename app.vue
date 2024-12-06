<script setup lang="ts">
  const dataTabs = [
    { title: 'Item 1', content: 'Contenu de l\'onglet 1' },
    { title: 'Item 2', content: 'Contenu de l\'onglet 2' }
  ];

  const dataTabsStyle3 = [
    { title: 'Item 1', content: 'Contenu de l\'onglet 1' },
    { title: 'Item 2', content: 'Contenu de l\'onglet 2' },
    { title: 'Item 3', content: 'Contenu de l\'onglet 3' },
    { title: 'Item 4', content: 'Contenu de l\'onglet 4' },
  ];

  const dataTabsStyle4 = [
    { title: 'Item 1', content: 'Contenu de l\'onglet 1' },
    { title: 'Item 2', content: 'Contenu de l\'onglet 2' },
    { title: 'Item 3', content: 'Contenu de l\'onglet 3' },
  ];
</script>

<template>
  <NuxtLayout>
    <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
      <div class="flex flex-row">
        <div class="flex flex-col basis-1/2">
          <TabsHeadlessUi :tabs="dataTabs" />
          <TabsHeadlessUi :tabs="dataTabs" selectedStyle="style1" />
          <TabsHeadlessUi :tabs="dataTabsStyle3" selectedStyle="style2" />
        </div>
        <div class="flex flex-col basis-1/2">
          <TabsHeadlessUi
            :tabs="dataTabsStyle4"
            selectedStyle="style3"
            classContainer="mt-16"
            classContent="p-32 couleur-fond--5 var--tabs4-tabs-content-radius" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
