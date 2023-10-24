<template>
  <div class="flex flex-row " style="height: 100vh">
    <SideBar/>
    <ChannelBar></ChannelBar>
    <slot/>
    <UserOffCanvas/>
  </div>
  <Modal/>

</template>
<script setup>
const darkMode = useDarkMode()
darkMode.setThemeClass()

</script>
<style>

</style>