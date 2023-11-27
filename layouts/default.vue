<template>

  <div class="flex flex-row " style="height: 100vh">
    <SideBar/>

    <slot/>
    <UserOffCanvas/>
  </div>
  <ModalChanel />

  <ModalJoinChanel/>
  
</template>
<script setup>


const darkMode = useDarkMode()
darkMode.setThemeClass()

</script>
<style>

</style>