<template >
    <div class='w-64  h-full fixed top-0 left-[80px] bg-white dark:bg-[#1f2937] text-gray-500 dark:text-white' >
      <ChannelBarBlock />
      <div class='channel-container '>
        <ChannelBarDropdown v-for="chanel in useChanel().getConversations" :header="chanel.name"  />
        <ChannelBarDropdown header='Questions' :selections="questions" />
        <ChannelBarDropdown header='Random' :selections="random" />
      </div>
      <h1>
      </h1>
    </div>
</template>
<script setup>
console.log(useChanel().conversations)
const chanelId= defineProps(['chanelId'])
console.log(chanelId)
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];
</script>
