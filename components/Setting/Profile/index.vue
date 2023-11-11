<template>
  <div class="h-full overflow-y-auto rounded-[1.2rem] bg-black dark:text-white text-black" >
    <div class="h-[8.6rem] relative ">
      <div class="bg-[#682749] h-1/2">

      </div>
      <div class="h-1/2 bg-transparent">

      </div>
      <div class="absolute top-1/2 left-[6%] transform w-[90px] h-[90px] -translate-y-1/2 rounded-full p-2 bg-black flex items-center gap-8">
        <nuxt-img
            class="rounded-full  w-full h-full  setting_profile_img"
            src="/img/ScreamZLogo.png"

        >
        </nuxt-img>
        <div class="rounded-full w-full h-full setting_profile_img_edit flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="m-auto w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M7.882 2h8.236l1.5 3H23v16H1V5h5.382l1.5-3Zm1.236 2l-1.5 3H3v12h18V7h-4.618l-1.5-3H9.118ZM12 9.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0Z"/></svg>
        </div>
        <span class="text-[1.5rem]">
          Screamz
        </span>
      </div>
    </div>
    <SettingProfileForm/>
  </div>
</template>

<script setup>
const img_edit = ref('block')
</script>

<style scoped>

.setting_profile_img_edit{
  display: none;
}
.setting_profile_img:hover {
  display: none;
}
.setting_profile_img:hover + .setting_profile_img_edit{
  display: block;
}
</style>