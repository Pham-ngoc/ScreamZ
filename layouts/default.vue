<template>
  <div class="flex flex-row " style="height: 100vh">
    <SideBar/>

    <slot/>
    <UserOffCanvas/>
  </div>
  <ModalWalletConnect/>

</template>
<script setup>
const darkMode = useDarkMode()
darkMode.setThemeClass()

</script>
<style>

</style>