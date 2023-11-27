<script>
export default {
  props: {
    chanel: {
      type: Object,
      default: null,
    },
  },
  methods: {
    async updateChanel() {
      console.log(this.chanelReactive)
      if (this.chanelReactive.creator === this.did) {
        this.pending = true
        await this.updateContext(this.chanelReactive.stream_id, this.chanelReactive.content)
            .then(() => {
              this.pending = false
              setTimeout(() => {
                useRouter().forward()
              }, 1000)
            }).catch(() => {
              this.pending = false
              alert("Update failed")
            })

      }
    },
    async uploadMediaServer(file) {
      this.pending = true
      await this.uploadMedia(file).then((res) => {
        if(res?.result?.url) {
          this.pending = false;
          this.chanelReactive.content.pfp = res?.result?.url
        }else {
          this.pending = false;
          alert("Upload failed")
        }
      }).catch(() => {
        this.pending = false;
        alert("Upload failed")
      })

    }
  },
  setup(props) {

    const {updateContext, did, uploadMedia} = useOrbisStore()
    const pending = ref(false)
    const toggleEditDisPlayName = ref(false)
    console.log(props.chanel)
    const showEditChanel=useState('ShowEditChanel')
    const chanelReactive = reactive({
      stream_id: props.chanel?.stream_id,
      content: {
        displayName: props.chanel?.content?.displayName,
        pfp: props.chanel?.content?.pfp,
        description: props.chanel?.content?.description,
      },
      creator:props.chanel.creator

    })
    const previewImageUrlRef = ref("");
    function handlePreview(file) {
      const {url} = file;
      previewImageUrlRef.value = url;
    }

    return {chanelReactive, toggleEditDisPlayName, pending, updateContext, did, uploadMedia,showEditChanel}
  }
}
</script>

<template>
  <n-modal
      v-model:show="showEditChanel"
  >
    <n-card
        style="width: 800px"
        title="Edit server"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <div class="flex items-center justify-between p-4 md:p-5 ">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Server overview
        </h3>
        <button type="button"
                @click="showEditChanel=false"
                class="close-editChanel text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="px-5 space-y-4">

        <div class="flex gap-3">
          <div class="flex justify-center items-center gap-4">
            <div class="w-24 h-20 rounded-full">
              <img v-if="chanelReactive.content.pfp &&!pending" class="w-full h-full rounded-full "
                   :src="chanelReactive.content.pfp"
                   alt="image description">
            </div>
            <div>
              <label for="files"
                     class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Change
                Image</label>
              <input id="files" style="visibility:hidden;" type="file" @input="uploadMediaServer($event.target.files[0])">
            </div>
          </div>
          <div class="" style="width: 290px">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Server
              name</label>
            <div class="flex gap-3 items-center ">
              <input v-if="toggleEditDisPlayName" type="text" id="default-input" placeholder="ScreamZ"
                     v-model="chanelReactive.content.displayName"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <span v-if="!toggleEditDisPlayName">{{ chanelReactive.content.displayName }}</span>
              <button class="bg-[#D9D9D9] p-1 rounded" @click="toggleEditDisPlayName=!toggleEditDisPlayName">
                {{ toggleEditDisPlayName ? 'Save' : 'Edit' }}
              </button>
            </div>
          </div>
        </div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea id="message" rows="4"
                  v-model="chanelReactive.content.description"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."></textarea>


      </div>

      <!-- Modal footer -->
      <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button v-if="!pending" type="button"
                @click="updateChanel()"
                class="close-editChanel text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Save

        </button>
        <button  v-else type="button"
                 class="close-editChanel text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
               viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"/>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </button>
        <button  type="button"
                 @click="showEditChanel=false"
                 class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
          Close
        </button>
      </div>
    </n-card>


  </n-modal>
</template>

<style scoped>

</style>