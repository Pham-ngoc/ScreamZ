<template>
    <div>
        <SettingBarNavBar></SettingBarNavBar>
        <div v-if="useRoute().query.name=='profile'">
            <Profile></Profile>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>

</style>