<template>
  <div id="startCreateChanelModel" tabindex="1"
       class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <form @submit.prevent="createContext()" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
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
                  data-modal-hide="startCreateChanelModel">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <button
              class="absolute text-gray-400 left-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="startCreateChanelModel" type="button" data-modal-toggle="createChanelModal">
            <IconChevronLeft/>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 space-y-6">

          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file"
                   class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <template  v-if="context.pfp ===''">
                  <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                      class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </template>
                <img v-else :src="context.pfp">
              </div>
              <input id="dropzone-file" type="file" class="hidden" @input="uploadMedia($event.target.files[0])"/>
            </label>
          </div>

          <div class="flex flex-col">
            <label for="channel-name" class="block text-sm font-medium text-gray-900 dark:text-gray-200">
              Name
            </label>
            <div class="mt-1">
              <input type="text" name="channel-name" id="channel-name" v-model="context.name"
                     class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                     placeholder="Channel name">
            </div>
          </div>
          <div class="flex flex-col">
            <label for="channel-display-name" class="block text-sm font-medium text-gray-900 dark:text-gray-200">
              Display name
            </label>
            <div class="mt-1">
              <input type="text" name="channel-name" id="channel-display-name" v-model="context.displayName"
                     class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                     placeholder="Channel name">
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex flex-col items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="createChanelModal" type="submit"

                  class="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const context=reactive({
  name:"",
  displayName:"",
  pfp:"",
})
const orbis=useOrbis();
const createContext=async ()=>{
  await orbis.createContext(context)
}
const uploadMedia=async (file)=>{

  await orbis.uploadMedia(file).then((res)=>{
    context.pfp=res?.result?.url
    console.log(res?.result?.url)
  })
}
</script>

<style scoped>

</style>