<template>
  <div class="flex flex-row " style="height: 100vh">
    <SideBar/>

    <slot/>
    <UserOffCanvas/>
  </div>

</template>
<script setup>
import { useDarkMode } from '~/composables/useDarkMode';

const darkMode = useDarkMode()
darkMode.setThemeClass()

</script>
<style>

</style>