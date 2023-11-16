<template>
  <div class='channel-block'>
    <h1 class="font-bold my-auto mr-auto mx-3">ScreamZ</h1>
    <a href="#" id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-placement="left"
       class="px-5 py-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
      <!--      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"-->
      <!--           class="bi bi-chevron-compact-down " viewBox="0 0 16 16">-->
      <!--        <path fill-rule="evenodd"-->
      <!--              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>-->
      <!--      </svg>-->
    </a>
    <!-- Dropdown menu -->
    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">

      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLeftButton">
        <li>
          <a href="#"
             data-modal-target="inviteConversationModal" data-modal-toggle="inviteConversationModal"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Invite people</a>
        </li>
        <li>
          <a href="#"
             data-modal-target="editChannel-modal" data-modal-toggle="editChannel-modal"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit channel</a>
        </li>
        <li>
          <a href="#"
             data-modal-target="createDropdown-modal" data-modal-toggle="createDropdown-modal"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create
            Conversion</a>
        </li>
        <li>
          <a href="#"
             data-modal-target="deleteChannel-modal" data-modal-toggle="deleteChannel-modal"
             @click=""
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete chanel</a>
        </li>
      </ul>
    </div>
  </div>
  <hr class="w-100 h-1 bg-gray-100 border-0 rounded dark:bg-gray-700">
</template>
<script setup lang="ts">
</script>