<template>
  <div class="flex flex-row border border-0 border-b-2 border-gray-400 relative left-0 top-0">

    <div class="flex flex-row  py-4 px-2 border border-0 border-b-2 border-gray-400">
      <template v-if="state$.isLogin">
        <div class="grid grid-cols-3 ">

          <button class="relative rounded-full">
            <NuxtImg v-if="getProfile.details.profile.pfp" :src="getProfile.details.profile.pfp" class="w-10 h-10 rounded-full" />
            <NuxtImg v-else src="/img/ScreamZLogo.png" class="w-10 h-10 rounded-full" />
            <span class="bottom-0 right-2 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </button>

          <div class="grid grid-rows-2 col-span-2">
            <h1 class="text-md font-black">{{getProfile.details.profile.username}}</h1>
            <span class="text-xs">Online</span>
          </div>
        </div>
        <button type="button"  class="ms-auto" @click="hanldeToggleModal()" >
          <IconSetting/>
        </button>
        <ModalSetting />
      </template>
      <template v-if="!state$.isLogin">
        <button type="button" @click="toogleConnectWalltetModal=!toogleConnectWalltetModal" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
          <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          Connect wallet
        </button>
        <ModalWalletConnect/>
      </template>
    </div>
  </div>
</template>

<script >

import {applyPureReactInVue} from 'veaury'
import {useOrbis, UserPopup,UserPfp} from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";
// import {ref} from "vue";




export default {
  components: {
    UserPop: applyPureReactInVue(UserPopup),
  },
  methods: {
    hanldeToggleModal(){
      this.toggleModal =! this.toggleModal

    },
  },
  setup() {
    const {orbis,getProfile,$state :state$}=useOrbisStore()
    const toggleModal=useState("setting-modal",()=>false)
    const toogleConnectWalltetModal=useState("crypto-modal",()=>false)

    return {
      getProfile,
      orbis,
      toggleModal,
      toogleConnectWalltetModal,
      state$

    }
  }
}

</script>

<style >
._3EuST{
  min-width: 120px;
  max-width: 395px;
}
</style>