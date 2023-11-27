<template>
<div class="w-full h-full">
  <ChatOrbis  :theme="theme" :context="context"/>
</div>
</template>

<script>
import {applyReactInVue, applyPureReactInVue} from 'veaury'
// This is a React component
// import BasicReactComponent from './react_app/Basic.jsx'
import { Chat, } from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";
import {ref} from 'vue'

export default {
  components: {
    // Use HOC 'applyReactInVue' or 'applyPureReactInVue'
    ChatOrbis: applyReactInVue(Chat),

  },
  props: {
    theme: {
      type: String,
      default: 'kjzl6cwe1jw145ky1bm1v9qszqilfxkvgqagyv0dfjshy2b7brpgasuxpyh07ch'
    },
    context: {
      type: String,
      default: ''
    }
  },

  setup() {
    return {
      foo: ref('Hello!')
    }
  }
}
</script>

<style>
._3mkOx {
  padding: 30px;
  left: -10px;
  top: -300px;
  z-index: 100;
}
</style>