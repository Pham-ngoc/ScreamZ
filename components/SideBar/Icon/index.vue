<template>
  <div class="sidebar-icon group bg-transparent p-1">
    <slot name="icon" />
    <span class="sidebar-tooltip group-hover:scale-100 z-2147483646">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props=defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  }
})


</script>

<style scoped>

</style>