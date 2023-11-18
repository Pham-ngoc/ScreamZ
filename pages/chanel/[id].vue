<template>
  <ChannelBar :chanelId="useRoute().params.id"></ChannelBar>
  <content-container></content-container>
</template>
<script setup>
definePageMeta({
  layout: 'default',
})

</script>

<style scoped>

</style>