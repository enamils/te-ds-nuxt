<script setup lang="ts">
const items = [{
  label: 'Électricité',
  icon: 'material-symbols:electric-bolt',
  content: 'Elec'
}, {
  label: 'Gaz',
  icon: 'bi:fire',
  content: 'Gaz'
}]

function onChange(index) {
  const item = items[index]

  console.log(`${item.label} was clicked!`)
}
</script>

<template>
  <UTabs
    :items="items"
    class="tabs-container"
    :ui="{
      list: {
        background: 'bg-[#F2F5F6]',
        marker: {
          background: 'bg-[#285AFF]'
        },
        tab: {
          active: 'text-white',
          font: 'font-bold'
        }
      }
    }"
    @change="onChange"
  >
    <template #icon="{ item, selected }">
      <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0 me-2" :class="[selected && 'text-white']" />
    </template>
    <template #default="{ item, index }">
      <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
    </template>
    <template #item="{ item }">
      {{ item.content }} + Lorem ipsum dolor sit amet consectetur adipisicing elit
    </template>
  </UTabs>
</template>

<style lang="scss" scoped>
  .tabs-container {
    min-height: 46px;
  }
</style>
