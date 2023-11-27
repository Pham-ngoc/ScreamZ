<template>
  <div class="bg-black h-auto p-4" >
<!--    <div class="mb-6 grid grid-cols-9 items-center justify-center gap-3">-->
<!--      <div class="col-span-8 ">-->
<!--        <label for="displayName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display-->
<!--          name</label>-->
<!--        <input-->
<!--            v-if="toggleEdit[0].isEdit"-->
<!--            type="text"-->
<!--            id="displayName"-->
<!--            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"-->
<!--            placeholder="name@flowbite.com"-->
<!--            required-->
<!--        >-->
<!--        <span v-if="!toggleEdit[0].isEdit">phamduyhuy</span>-->
<!--      </div>-->
<!--      <button type="submit" v-if="toggleEdit[0].isEdit" class="col-span-1 bg-[#D9D9D9] mt-6" @click="toggleEdit[0].isEdit=!toggleEdit[0].isEdit">-->
<!--        Save-->
<!--      </button>-->
<!--      <button v-else class="col-span-1 bg-[#D9D9D9] mt-6" @click="toggleEdit[0].isEdit=!toggleEdit[0].isEdit">-->
<!--        Edit-->
<!--      </button>-->
<!--    </div>-->
    <div class="mb-6 grid grid-cols-9 items-center justify-center gap-3">
      <div class="col-span-8 ">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input
            v-if="toggleEdit[1].isEdit" type="text"
            v-model="profile.username"
            id="username"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
        >
        <span v-if="!toggleEdit[1].isEdit">{{profile.username}}</span>
      </div>
      <button  v-if="toggleEdit[1].isEdit"  class="col-span-1 bg-[#D9D9D9] mt-6" @click="toggleEdit[1].isEdit=!toggleEdit[1].isEdit; updateProfile()">
        Save
      </button>
      <button v-else  class="col-span-1 bg-[#D9D9D9] mt-6" @click="toggleEdit[1].isEdit=!toggleEdit[1].isEdit">
        Edit
      </button>
    </div>
<!--    <div class="mb-6 grid grid-cols-9 items-center justify-center gap-3">-->
<!--      <div class="col-span-8 ">-->
<!--        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>-->
<!--        <input-->
<!--            v-if="toggleEdit[2].isEdit" type="text"-->
<!--            id="username"-->
<!--            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"-->
<!--            placeholder="name@flowbite.com"-->
<!--            required-->
<!--        >-->
<!--        <span v-if="!toggleEdit[2].isEdit">huyeptrai821@gmail.com</span>-->
<!--      </div>-->
<!--      <button type="submit" v-if="toggleEdit[2].isEdit" class="col-span-1 bg-[#D9D9D9] mt-6" @click="toggleEdit[2].isEdit=!toggleEdit[2].isEdit">-->
<!--        Save-->
<!--      </button>-->
<!--      <button v-else class="col-span-1 bg-[#D9D9D9] mt-6" @click="toggleEdit[2].isEdit=!toggleEdit[2].isEdit">-->
<!--        Edit-->
<!--      </button>-->
<!--    </div>-->
  </div>
</template>

<script setup>

defineProps({
  profile:{
    type:Object,
    required:true
  }
})
const emit = defineEmits(['update-profile'])
const updateProfile=async ()=>{
  console.log("asdasdsa")
  emit('update-profile')
}
const toggleEdit = ref([
  {
    field: 'displayName',
    isEdit: false,
  },
  {
    field: 'username',
    isEdit: false,
  },
  {
    field: 'email',
    isEdit: false,
  },
])

</script>

<style scoped>

</style>