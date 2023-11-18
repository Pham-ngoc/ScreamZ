<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>


</template>
<script setup>
import {initFlowbite} from "flowbite";
import { useOrbis } from "./composables/useOrbis";
const {init}=useOrbis()
init()

onMounted(async () => {
  initFlowbite()


})

</script>