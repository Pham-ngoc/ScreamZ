<template>
  <div class="flex flex-row  py-4 px-2 border border-0 border-b-2 border-gray-400">

  </div>
</template>

<script>

import {applyPureReactInVue} from 'veaury'
import {User} from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";
// import {ref} from "vue";
export default {
  components: {
    Username: applyPureReactInVue(User),
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
    const {getProfile,getDid,orbis}=useOrbisStore()

    return {
      getProfile,getDid,orbis

    }
  }
}
// This is a React component
// import BasicReactComponent from './react_app/Basic.jsx'
// onMounted(async () => {
// })
// const toggleModal=useState("setting-modal",()=>false)
// const toogleConnectWalltetModal=useState("crypto-modal",()=>false)
// const hanldeToggleModal=()=>{
//   toggleModal.value=!toggleModal.value
//   console.log(toggleModal.value)
// }
</script>

<style scoped>

</style>