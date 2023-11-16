<template>
  <div class="h-full w-48 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
    <NuxtLink >
      <SideBarIcon >
        <template v-slot:icon>
          <NuxtImg src="/img/ScreamZLogo.png" width="32" height="32" />
        </template>
      </SideBarIcon>
    </NuxtLink>
    <button v-for="ct in $state.contexts" :key="ct.stream_id" @click="useOrbis().deleteContext(ct.stream_id)">
      <SideBarIcon :text="ct.content.displayName">
        <template v-slot:icon>
          <svg v-if="!ct.content.pfp" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
          </svg>
          <NuxtImg v-else  :src="ct.content.pfp" class="w-full h-full hover:rounded-xl rounded-3xl"/>
        </template>
      </SideBarIcon>
    </button>

    <div class="mt-auto flex-col flex ">
      <hr class="sidebar-hr"/>
      <button type="button" data-modal-target="createChanelModal" data-modal-toggle="createChanelModal">
        <SideBarIcon>
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
              <path fill="currentColor"
                    d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"/>
            </svg>
          </template>
        </SideBarIcon>
      </button>
    </div>

  </div>
</template>
<script setup>
const {$state}=useOrbis()
</script>