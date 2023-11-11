<template>
  <div class="flex flex-col p-2 bg-gray-800  dark:text-white gap-3  "  >
    <button v-for="st in tabs" class="setting-item" style=""
            id="profile-tab"
            type="button"
            :class="{'active': currentTab.name == st.name}"
            @click="$emit('setCurrentTab', st.name)"
    >
      {{ st.name }}
    </button>
  </div>
</template>
<script setup>
defineProps({
  currentTab: {
    type: Object,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
})
</script>
<style>
.setting-item{
  border: none;
  padding: 27px 25px;
  background-color: transparent;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
}
.setting-item:hover {
  background: linear-gradient(90deg, #8d28ca, #e85f62);
}
.active {
  background: linear-gradient(90deg, #8d28ca, #e85f62);

}
.log-out:hover {
  border: none;
  padding: 27px 25px;
  position: absolute;
  border-radius: 10px;
  background: linear-gradient(90deg, #8d28ca, #e85f62);
  color: white;
  width: 250px;
  height: 83px;
}


</style>
