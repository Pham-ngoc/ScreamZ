<template>
    <SettingBarNavBar></SettingBarNavBar>
    <div v-if="useRoute().query.name=='profile'">
        <Profile></Profile>
    </div>
</template>
<script setup>
</script>
