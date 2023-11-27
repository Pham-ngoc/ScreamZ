<template>
  <div class="h-full overflow-y-auto rounded-[1.2rem] bg-black dark:text-white text-black" >
    <div class="h-[8.6rem] relative ">
      <div class="bg-[#682749] h-1/2">

      </div>
      <div class="h-1/2 bg-transparent">

      </div>

      <div class="absolute top-1/2 left-[6%] ] h-[90px] -translate-y-1/2 rounded-full p-2 bg-transparent flex items-center gap-8">
        <form id="avatar-form"  class="w-full h-full" style="display: none">
          <input ref="fileInput" type="file" @change="handleFileSelect" hidden>
        </form>
<!--        <img  class="h-20 w-20 rounded-full cursor-pointer" :src="profile.photo" alt="userAvatar">-->
        <div>
          <nuxt-img
              v-if="!toggleSave&&profile.pfp"
              @click="openFileInput"
              class="h-20 w-20 rounded-full cursor-pointer"
              alt="userAvatar"
              :src="profile.pfp"
          >
          </nuxt-img>
          <nuxt-img
              v-if="!toggleSave&&!profile.pfp"
              @click="openFileInput"
              class="h-20 w-20 rounded-full cursor-pointer"
              alt="userAvatar"
              src="/img/ScreamZLogo.png"
          >
          </nuxt-img>
          <nuxt-img
              v-if="toggleSave&&imgPreview"
              @click="openFileInput"
              class="h-20 w-20 rounded-full cursor-pointer"
              alt="userAvatar"
              :src="imgPreview"
          >
          </nuxt-img>
        </div>
        <div @click="openFileInput" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M208 58h-28.79L165 36.67a6 6 0 0 0-5-2.67H96a6 6 0 0 0-5 2.67L76.78 58H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22Zm10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h32a6 6 0 0 0 5-2.67L99.21 46h57.57L171 67.33a6 6 0 0 0 5 2.67h32a10 10 0 0 1 10 10ZM128 90a42 42 0 1 0 42 42a42 42 0 0 0-42-42Zm0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30Z"/></svg>
          <span>.jpg .png</span>
        </div>
        <button v-if="toggleSave&&!loading" @click="updateProfileMethod()" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
        <button v-if="loading"  type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <n-spin size="small" />
        </button>

      </div>
    </div>
    <SettingProfileForm :profile="profile" @update-profile="updateProfileMethod"/>
  </div>
</template>

<script >
export default {
  methods: {
    async openFileInput(){
      this.$refs.fileInput.click();
    },
    async handleFileSelect(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {

        this.toggleSave=true
        this.loading=true
        await this.uploadMedia(selectedFile).then((res) => {
          console.log(res)
          this.imgPreview = res?.result?.url
        })
        this.loading=false
      }
    },
    async updateProfileMethod(){

      this.loading=true
      if(this.imgPreview){
        this.profile.pfp=this.imgPreview
      }
      console.log(this.profile)
      console.log(this.imgPreview)
      await this.updateProfile(this.profile).then((res)=>{
        this.toggleSave=false
        this.loading=false
        this.imgPreview=''
        this.profile=this.getProfile?.details?.profile
        window.location.reload()
      })
      this.toggleSave=false
      this.loading=false
      this.imgPreview=''
    }
  },
  setup() {
    const {uploadMedia,updateProfile,getProfile}=useOrbisStore()
    console.log(getProfile)
    const profile = reactive({
      ...getProfile?.details?.profile
    })
    const loading=ref(false)
    const imgPreview = ref('')
    const toggleSave = ref(false)
    return {
      profile,
      uploadMedia,
      updateProfile,
      toggleSave,
      getProfile,
      imgPreview,loading

    }
  }
}
</script>

<style scoped>


</style>