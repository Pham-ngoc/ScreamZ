<script setup>
import {initFlowbite} from "flowbite";


onMounted(async () => {
  initFlowbite()


})
useState("createChanelModal",()=>false)

</script>
<template>
  <ChannelBar :chanelId="useRoute().params.id"></ChannelBar>
  <ContentContainer/>

  <ModalChanel />
  <ModalCreateChanelForm/>
  <ModalJoinChanel/>


</template>

