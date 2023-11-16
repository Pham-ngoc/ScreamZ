<template>

  <div id="setting-modal"
      v-if="isShowModal" class="fixed top-0 left-0 right-0 z-50  w-full  h-full bg-white dark:bg-gray-800 ">
    <button type="button" class="absolute top-5 right-6 text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="isShowModal=!isShowModal" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
    <div class="absolute top-[8%] bottom-[8%] left-[8%] right-[10%] grid grid-cols-12 gap-6">
      <SettingNavBar class="col-span-3 border-0 border-r-2 dark:border-gray-500" @setCurrentTab="setCurrentTab" :current-tab="currentTab" :tabs="tabs"></SettingNavBar>
      <div id="default-tab-setting" class="col-span-9">
        <Component :is="currentTab.component"></Component>
      </div>
    </div>
  </div>
</template>
<script setup>
import {SettingProfile, SettingAppearance} from "#components";
const isShowModal=useState("setting-modal")
const tabs=ref([
  {
    name:'Profile',
    component:SettingProfile
  },
  {
    name:'Appearance',
    component:SettingAppearance
  }
])
const currentTab=ref({
  name:'Profile',
  component:SettingProfile
})
const setCurrentTab=(tab_name)=>{
  currentTab.value=tabs.value.find(tab=>tab.name===tab_name)
}
</script>

<style scoped>

</style>