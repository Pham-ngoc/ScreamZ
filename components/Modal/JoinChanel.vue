<template>
  <div id="joinChanelModal" tabindex="-1"
       class="fixed top-0 left-0 right-0 z-50 hidden  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
            class="flex flex-col items-center text-center justify-between p-5 border-b rounded-t dark:border-gray-600 relative">
          <h3 class="text-xl mx-auto   font-medium text-gray-900 dark:text-white">
            Join the Channel
          </h3>
          <p>
            Enter the invitation text below to join an available channel
          </p>
          <button type="button"
                  class="absolute text-gray-400 right-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <button
              class="absolute text-gray-400 left-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="joinChanelModal" type="button" data-modal-toggle="createChanelModal">
            <IconChevronLeft/>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 space-y-6">
          <div class="flex flex-col">
            <label for="channel-name" class="block text-sm font-medium text-gray-900 dark:text-gray-200">
              Invite link
            </label>
            <div class="mt-1">
              <input type="text" name="channel-link" id="channel-link"
                     class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                     placeholder="Link">
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button type="button"
                  class="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Join the chanel
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>