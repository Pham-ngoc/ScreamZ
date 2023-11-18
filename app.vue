<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
import {initFlowbite} from "flowbite";
onMounted(async () => {
  initFlowbite();
  const {init}=useOrbis();
  init();
})

</script>