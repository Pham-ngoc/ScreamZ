<script setup>
import {initFlowbite} from "flowbite";

onMounted(async () => {
  initFlowbite()


})
useState("createChanelModal",()=>false)
const serverId=useRoute().params.severId
</script>
<template>
  <ChannelBar :chanelId="serverId"></ChannelBar>
  <ContentContainer/>

</template>

