<template>
  <IconThemeDark v-if="theme === true" />
  <IconThemeLight v-else />
</template>

<script setup>
const props=defineProps({
  theme:{
    type:Boolean,
    default: true
  }
})
</script>

<style scoped>

</style>