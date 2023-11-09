<template>
    <SettingBarNavBar></SettingBarNavBar>
    <div v-if="useRoute().query.name=='profile'">
        <Profile></Profile>
    </div>
    <div v-if="useRoute().query.name=='appearance'">
        <Appearance></Appearance>
    </div>
</template>
<script setup>
</script>
