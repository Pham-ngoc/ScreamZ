<template >
    <div class='relative w-[1250px]'>
<!--      <TopNavigation />-->

      <div class='content-list'>
        <template v-if="param!==null &&param.type!=='server'">
          <ContentContainerChat v-if="param.type==='chanel'&& param.id" :context="param.id"/>


        </template>
        <template v-if="param===null">
          <div class="absolute w-full h-full flex items-center justify-center">
            <div class="flex flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">Welcome to Greamz</h1>
              <p class="text-gray-500">Click on a server to explore!</p>
            </div>
          </div>
        </template>
      </div>

    </div>
</template>
<script setup>
defineProps({
  param: {
    type: Object,
    default: null,
  },
})
</script>
