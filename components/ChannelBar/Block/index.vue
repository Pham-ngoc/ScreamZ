<template>
  <div class='channel-block'>
    <h1 class="font-bold my-auto mr-auto">ScreamZ</h1>
    <a href="#" id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="px-5 py-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
           class="bi bi-chevron-compact-down " viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
      </svg>
    </a>

    <!-- Dropdown menu -->
    <div id="dropdown"
         style=""
         class=" hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="absolute -left-20 py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
        <li>
          <button type="button"
                  data-modal-target="inviteConversationModal" data-modal-toggle="inviteConversationModal"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Invite people
          </button>
        </li>
        <li>
          <button type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Edit channel
          </button>
        </li>
        <li>
          <button type="button"
                  data-modal-target="createDropdown-modal" data-modal-toggle="createDropdown-modal"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Create Conversion
          </button>
        </li>
        <hr>
        <li>
          <button type="button"
                  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Delete chanel
          </button>
        </li>
      </ul>
    </div>
  </div>
  <hr class="w-100 h-1 bg-gray-100 border-0 rounded dark:bg-gray-700">
</template>
<script setup lang="ts">
</script>