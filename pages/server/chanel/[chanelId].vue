<template>
  <ChannelBar :chanelId="serverId"></ChannelBar>
  <ContentContainer :param="{
    id:chanelId,
    type:'chanel'
  }"
  />
</template>

<script setup>


const chanelId=useRoute().params.chanelId
const {getParentContext}=useOrbisStore()
const serverId=await getParentContext(chanelId)
</script>

<style scoped>

</style>