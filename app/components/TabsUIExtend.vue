<script setup>
defineProps({
  classContainer: {
    type: String,
    default: ''
  },
  selectedStyle: {
    type: String,
    default: 'default' // Style par défaut
  }
})

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

const getClassForStyle = (style) => {
  switch (style) {
    case 'style1':
      return 'style1-class'
    case 'style2':
      return 'style2-class'
    case 'style3':
      return 'style3-class'
    default:
      return 'styleDefault-class'
  }
}
</script>

<template>
  <UTabs
    :items="items"
    :class="[classContainer, getClassForStyle(selectedStyle)]"
    @change="onChange"
  >
    <template #icon="{ item, selected }">
      <UIcon
        :name="item.icon"
        class="w-4 h-4 flex-shrink-0 me-2"
        :class="[selected && 'text-white']"
      />
    </template>
    <template #default="{ item, index }">
      <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
    </template>
    <template #item="{ item }">
      {{ item.content }}
    </template>
  </UTabs>
</template>

<style lang="scss" scoped>
  .style1-class {
    background-color: blue;
  }

  .style2-class {
    background-color: pink;
  }

  .style3-class {
    background-color: yellow;
  }

  .styleDefault-class {
    background-color: #ffffff;
  }
</style>
