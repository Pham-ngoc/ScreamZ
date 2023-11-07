<template >
    <div class='w-80  h-full fixed top-0 left-[80px] bg-white dark:bg-[#1f2937] text-gray-500 dark:text-white' >
      <ChannelBarBlock />
      <hr className="sidebar-hr"/>
      <div class='channel-container '>
        <slot name="chanelBarContent"></slot>
      </div>
    </div>
</template>
<script setup>

</script>
