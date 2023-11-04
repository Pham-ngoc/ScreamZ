<template>
<div class="flex flex-col flex-wrap p-2">
  <div class="flex flex-col">
    <h1 class="font-bold mb-3">My friends</h1>
    <div class="flex flex-row ">
      <div class="grid grid-cols-3 ">

        <button class="relative rounded-full">
          <NuxtImg src="/img/ScreamZLogo.png" class="w-10 h-10 rounded-full" />
          <span class="bottom-0 right-2 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </button>

        <div class="grid grid-rows-2 col-span-2">
          <h2 class="text-lg font-bold">Display name</h2>
          <span class="text-xs">Online</span>
        </div>
      </div>
      <button class="ms-auto" @click="userContainer().isUserChatFriend = true">
        <IconFriendChat class="ms-auto w-10 h-7"/>
      </button>
    </div>
  </div>
</div>
</template>

<script setup>

import {userContainer} from "~/composables/userContainer.js";
</script>

<style scoped>

</style>