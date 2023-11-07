<script setup lang="ts">

</script>

<template>
  <div class="mr-auto ml-3.5 p-2 flex items-center relative">
    <span
        class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    <img class="w-10 h-10 rounded-full" src="/img/ScreamZLogo.png" alt="">
    <div class="font-medium ml-2 dark:text-white">
      <div>Jese Leos</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
  </div>
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style="border-radius: 100%"
          type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="27" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="2" r="1.5"/><circle cx="7" cy="7" r="1.5"/><circle cx="7" cy="12" r="1.5"/></g></svg>
  </button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove
          Friend</a>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>