<template>
  <div class="fixed top-0 left-0 h-full w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
    <NuxtLink >
      <SideBarIcon >
        <template v-slot:icon>
          <NuxtImg src="/img/ScreamZLogo.png" width="32" height="32" />
        </template>
      </SideBarIcon>
    </NuxtLink>
    <NuxtLink to="/chanel/1">
      <SideBarIcon >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
          </svg>
        </template>
      </SideBarIcon>
    </NuxtLink>
    <NuxtLink to="/chanel/2">
      <SideBarIcon >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
          </svg>
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
</template>