<template>
  <div class='channel-block z-0'>
    <div v-if="pending" class="flex items-center justify-center" role="status">
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
    </div>
    <template v-if="server">
      <h1 class="font-bold my-auto mr-auto px-2">{{ serverRef.content.name }}</h1>

      <n-dropdown :show-arrow="true" trigger="click" :options="options" placement="bottom-end">
        <button class="mr-3">
          <svg class="w-4 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4"/>
          </svg>
        </button>
      </n-dropdown>
    </template>
  </div>
  <hr class="w-100 h-1 bg-gray-100 border-0 rounded dark:bg-gray-700">
  <n-modal
      v-model:show="showModal"
      class="custom-card"
      preset="card"
      :style="bodyStyle"
      title="Create chanel"
      :bordered="false"
      size="huge"
      :segmented="segmented"
  >
    <template #header-extra>
<!--      Create chanel-->
    </template>

    <div>
      <label for="chanel_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chanel name</label>
      <input type="text" id="chanel_name"
              v-model="chanelRef.name"
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="New Chanel" required>
    </div>
    <div class="mt-3">
      <div class="space-y-3 flex justify-between">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V8h3V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h3v14H4Zm8-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"/></svg>
          <span class="ml-2">Private chanel</span>
        </div>
        <n-switch class="" v-model:value="chanelRef.isPrivate" />
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end gap-3">
        <n-spin v-if="isLoading" size="large" />
        <template v-else>
          <n-button @click="showModal = false">Cancel</n-button>
          <n-button @click="handleCreateChanel" class="text-white" type="info">
            Create
          </n-button>
        </template>
      </div>
    </template>
  </n-modal>
  <n-modal
      v-model:show="showPrivateModal"
  >
    <n-card
        style="width: 600px"
        title="Modal"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template #header-extra>
        Add members
      </template>
      Content
      <template #footer>
        <div class="flex justify-end gap-3">
          <n-spin v-if="isLoading" size="large" />
          <template v-else>
            <n-button @click="showPrivateModal = false; showModal=true">Back</n-button>
            <n-button class="text-white" type="info">
              Create
            </n-button>
          </template>
        </div>
      </template>
    </n-card>


  </n-modal>
  <ModalEditChannel :chanel="server"/>
</template>
<script>
import {Modal} from 'flowbite';
import {useMessage, useDialog} from 'naive-ui'
export default {
  props: {
    server: {
      type: Object,
      default: null,
    },
  },
  mounted: function () {


  },
  setup(props) {
    const serverRef = ref(props.server)
    const chanelRef=reactive({
      name:'',
      isPrivate:false
    })
    const isLoading=ref(false)
    const {deleteContext,createChannel} = useOrbisStore()
    const message = useMessage()
    const dialog = useDialog()
    const modal = ref(null)
    const pending = ref(false)
    const isValid = ref(false)
    const accessRules=reactive({
      type: "did",
      authorizedUsers: []
    })
    const showEditChanel= useState('ShowEditChanel',()=>false)
    const showPrivateModal=ref(false)
    const handleCreateChanel=async ()=>{
      if(!chanelRef.name){
        message.error('Chanel name is required')
        return
      }
      isLoading.value=true
      if(chanelRef.isPrivate){
        showModal.value=false
        showPrivateModal.value=true
        await createChannel(serverRef.value.stream_id,chanelRef.name,accessRules.authorizedUsers)
        isLoading.value=false
        window.location.href = useRoute().path
        return
      }
      console.log(serverRef.value.stream_id)
      await createChannel(serverRef.value.stream_id,chanelRef.name)
      isLoading.value=false
      window.location.href = useRoute().path
    }
    const handleConfirm = async () => {
      dialog.warning({
        title: 'Confirm',
        content: 'Are you sure to delete the chanel?',
        positiveText: 'Sure',
        negativeText: 'Not Sure',
        onPositiveClick: async () => {
          pending.value = true
          await deleteContext(serverRef.value).then(() => {
            pending.value = false
            message.success('Delete success')
            // setTimeout(() => {
            //   window.location.href = '/'
            // }, 1000)
          })
        },
        onNegativeClick: () => {
          pending.value = false
        }
      })
    }
    const showModal = ref(false)
    const options = ref([
      {
        label: 'Edit server',
        key: 'edit server',
        props: {
          onClick: () => {
            showEditChanel.value=true
          }
        }
      },
      {
        label: "Create chanel",
        key: "create chanel",
        props: {
          onClick: () => {
            showModal.value = true
          }
        }
      },
      {
        key: 'delete chanel',
        show: true,
        type: 'divider',
      },
      {
        label: 'Delete chanel',
        key: 'delete chanel',

        props: {
          onClick: async () => {
            await handleConfirm();


          }
        }
      }
    ])
    return {
      serverRef,
      options,
      modal,
      pending,
      handleConfirm,
      bodyStyle: {
        width: "600px"
      },
      segmented: {
        content: "soft",
        footer: "soft"
      },
      isLoading,
      showModal,
      chanelRef,
      showPrivateModal,
      handleCreateChanel

    }
  },
}

</script>