<template>
  <div class='flex flex-row items-center justify-evenly bg-gray-300 dark:bg-gray-700 bg-opacity-90 w-full h-16 m-0 shadow-lg sticky top-0'>
    <IconHashTag />
    <TopNavigationTitle/>
    <UserUI v-if="userContainer().isUserChatFriend"/>
    <IconTheme :theme="switchTheme.$state.darkMode" @click="switchTheme.toggleDarkMode()" />

  </div>
</template>

<script setup>



const router= useRoute()
const switchTheme=useDarkMode()

</script>

<style scoped>

</style>