<template>
  <div id="createChanelModal" tabindex="0"
       class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
            class="flex flex-col items-center text-center justify-between p-5 border-b rounded-t dark:border-gray-600 relative">
          <h3 class="text-xl mx-auto   font-medium text-gray-900 dark:text-white">
            Create a chanel
          </h3>
          <p>
            Your channel is where you hang out with your friends.
            Create your own channel and start chatting.
          </p>
          <button type="button"
                  class="absolute text-gray-400 right-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="createChanelModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <button  type="button" data-modal-hide="createChanelModal" data-modal-target="startCreateChanelModel" data-modal-toggle="startCreateChanelModel" class="flex justify-between w-full p-3 rounded border border-gray-500 dark:border-white">
            <span>
              Create your own template
            </span>
            <IconChevronRight/>
          </button>
        </div>
        <!-- Modal footer -->
        <div class="flex flex-col items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <h1>Have you joined the channel already?</h1>
          <button  type="button"  data-modal-hide="createChanelModal" data-modal-target="joinChanelModal" data-modal-toggle="joinChanelModal"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Join the channel
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>