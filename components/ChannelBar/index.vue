<template >
    <div class='w-64  h-full fixed top-0 left-[80px] bg-white dark:bg-[#1f2937] text-gray-500 dark:text-white' >
      <ChannelBarBlock />
      <div class='channel-container '>
        <ChannelBarDropdown  header="chanel.name"  />

      </div>
      <h1>
      </h1>
    </div>

</template>
<script setup>

const chanelId= defineProps({
  chanelId:{
    type:String,
    required:false,
    default:''
  }
})
console.log(chanelId)
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];
</script>
