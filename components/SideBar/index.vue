<template>
  <div class="fixed top-0 left-0 h-full w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
    <NuxtLink>
      <SideBarIcon >
        <template v-slot:icon>
          <NuxtImg src="/img/ScreamZLogo.png" width="32" height="32" />
        </template>
      </SideBarIcon>
    </NuxtLink>
    <hr className="sidebar-hr" />
    <NuxtLink>
      <SideBarIcon >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>
        </template>
      </SideBarIcon>
    </NuxtLink>
    <hr className="sidebar-hr" />
    <NuxtLink>
      <SideBarIcon >
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#2ED6A1"/><path fill="#FFF" fill-rule="nonzero" d="M14.856 17.62h4.42a2.987 2.987 0 0 0 2.978-2.996a2.987 2.987 0 0 0-2.978-2.995H17.87L14.856 9h4.42a5.602 5.602 0 0 1 5.488 4.545a5.632 5.632 0 0 1-3.379 6.29l3.485 3.042h-3.991l-6.023-5.258zm2.157-3.36h-4.42a2.987 2.987 0 0 0-2.978 2.994a2.987 2.987 0 0 0 2.978 2.995H14l3.012 2.63h-4.419a5.602 5.602 0 0 1-5.488-4.545a5.632 5.632 0 0 1 3.379-6.29L7.002 9h3.991l6.02 5.26z"/></g></svg>
        </template>
      </SideBarIcon>
    </NuxtLink>
  </div>
</template>