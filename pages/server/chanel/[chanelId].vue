<template>
  <ChannelBar :chanelId="serverId"></ChannelBar>
  <ContentContainer :param="{
    id:chanelId,
    type:'chanel'
  }"
  />
</template>

<script setup>


const chanelId = useRoute().params.chanelId
const {getParentContext, getNotifications, setNotifications} = useOrbisStore()
const serverId = await getParentContext(chanelId)
const time = await setNotifications(chanelId)

</script>

<style scoped>

</style>