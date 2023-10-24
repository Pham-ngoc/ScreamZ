<template >
    <div class='w-80  h-full fixed top-0 left-[80px] bg-white dark:bg-[#1f2937] text-gray-500 dark:text-white' >
      <ChannelBarBlock />
      <div class='channel-container '>
        <ChannelBarDropdown header='Topics' :selections="topics" />
        <ChannelBarDropdown header='Questions' :selections="questions" />
        <ChannelBarDropdown header='Random' :selections="random" />
      </div>
    </div>
</template>
<script setup>
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];
</script>
