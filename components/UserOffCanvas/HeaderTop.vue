<template>
  <div class="flex flex-row  py-4 px-2 border border-0 border-b-2 border-gray-400">
    <div class="grid grid-cols-3 ">

      <button class="relative rounded-full">
        <NuxtImg src="/img/ScreamZLogo.png" class="w-10 h-10 rounded-full" />
        <span class="bottom-0 right-2 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </button>

      <div class="grid grid-rows-2 col-span-2">
        <h1 class="text-lg font-black">Display name</h1>
        <span class="text-xs">Online</span>
      </div>
    </div>
    <button class="ms-auto">
      <IconSetting/>
    </button>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>