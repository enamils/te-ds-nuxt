<script setup lang="ts">
  const dataTabs = [
    { title: 'Item 1', content: 'Contenu de l\'onglet 1' },
    { title: 'Item 2', content: 'Contenu de l\'onglet 2' }
  ];

  const dataTabsStyle4 = [
    { title: 'Item 1', content: 'Contenu de l\'onglet 1' },
    { title: 'Item 2', content: 'Contenu de l\'onglet 2' },
    { title: 'Item 3', content: 'Contenu de l\'onglet 3' },
  ];
</script>

<template>
  <NuxtLayout>
    <div class="row">
      <div class="columns small-12 medium-6">
        <Tabs :tabs="dataTabs" />
        <Tabs :tabs="dataTabs" selectedStyle="style1" />
        <Tabs :tabs="dataTabs" selectedStyle="style2" />
      </div>
      <div class="columns small-12 medium-6">
        <Tabs
          :tabs="dataTabsStyle4"
          selectedStyle="style3"
          classContainer="mt-16"
          classContent="p-32 couleur-fond--5 var--tabs4-tabs-content-radius" />
      </div>
    </div>
  </NuxtLayout>
</template>
