<template>
    <div class='post'>
      <div className='avatar-wrapper'>
        <NuxtImg src="/img/ScreamZLogo.png" class='avatar' />
      </div>

      <div class='post-content '>
        <p class='post-owner'>
          {{name}}
          <small class='timestamp'>{{timestamp}}</small>
        </p>
        <p class='post-text'>{{text}}</p>
      </div>
    </div>
</template>
<script setup>
import moment from 'moment'
defineProps({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const timestamp = moment(new Date()).fromNow()
</script>
