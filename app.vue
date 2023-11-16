<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>


</template>
<script setup>
import {initFlowbite} from "flowbite";
const {init}=useOrbis()
init()

onMounted(async () => {
  initFlowbite()


})

</script>