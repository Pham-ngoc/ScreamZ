<template>
    <div className='dropdown'>
      <div role="button" @click="expanded=!expanded" class='dropdown-header'>
        
        <svg v-if="expanded" class="text-accent text-opacity-80 my-auto mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/></svg>
        <svg v-else class="text-accent text-opacity-80 my-auto mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8L6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg>
        <h5
          :class="expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'"
        >
          {{header}}
        </h5>
        <svg class='text-accent text-opacity-80 my-auto ml-auto' xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
      </div>
        <div v-if="expanded && selections" class='dropdown-selections'>
            <ChannelBarTopicSelection v-for="selection in selections" :selection="selection" v-bind:key="selection" />
        </div>
    </div>
</template>
<script setup lang=ts>
    defineProps<{
        header?: string,
        selections?: string[]
    
    }>()
    const expanded = ref(false)
    
</script>
