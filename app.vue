<template>

  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <n-dialog-provider>

        <NuxtLayout>
          <NuxtPage/>

        </NuxtLayout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>


</template>
<script setup>
import {initFlowbite} from "flowbite";

const {init,orbis}= useOrbisStore()
await init()
import { darkTheme } from 'naive-ui'

onMounted(async () => {
  initFlowbite()
})

</script>