<template>
  <div class="fixed top-0 left-0 h-full w-20 flex flex-col
                  bg-[#cbd5e1] dark:bg-gray-900 shadow-lg">
    <NuxtLink >
      <SideBarIcon>
        <template v-slot:icon>
          <NuxtImg src="/img/ScreamZLogo.png" width="32" height="32"/>
        </template>
      </SideBarIcon>
    </NuxtLink>
    <hr>
    <NuxtLink v-for="channel in useOrbis().channels">
      <SideBarIcon>
        <template v-slot:icon>
          <NuxtImg src="/img/ScreamZLogo.png" width="32" height="32"/>
        </template>
      </SideBarIcon>
    </NuxtLink>

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
  <ModalChanel/>
  <ModalCreateChanelForm/>
  <ModalJoinChanel/>
</template>
<script setup>


import {useOrbis} from "~/composables/useOrbis.js";
</script>