<template>
  <ChannelBar :chanelId="serverId"></ChannelBar>
  <ContentContainer :param="{
    id:serverId,
    type:'server'
  }"
  />
</template>
<script setup>
const serverId=useRoute().params.severId

</script>

<style scoped>

</style>