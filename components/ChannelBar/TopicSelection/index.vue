<template>

    <div class='dropdown-selection'>
    <!-- <BsHash size='24' className='text-gray-400' /> -->
    <h5 class='dropdown-selection-text'>{{selection}}</h5>

  </div>
</template>
<script setup lang=ts>
defineProps<{
    selection?: string
}>();
</script>
