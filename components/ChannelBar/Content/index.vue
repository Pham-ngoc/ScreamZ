<script setup lang="ts">
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];
</script>

<template v-slot:chanelBarContent>
  <ChannelBarDropdown header='Topics' :selections="topics" />
  <ChannelBarDropdown header='Questions' :selections="questions" />
  <ChannelBarDropdown header='Random' :selections="random" />
</template>

<style scoped>

</style>