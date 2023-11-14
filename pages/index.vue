<script setup>

</script>
<template>
  <ChannelBar :chanelId="useRoute().params.id"></ChannelBar>
  <ContentContainer/>
  <ModalWalletConnect/>
  <ModalSetting/>
</template>
