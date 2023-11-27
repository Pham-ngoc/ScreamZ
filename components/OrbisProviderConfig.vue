<template>
  <OrbisProvider :defaultOrbis="defaultOrbis">
    <slot/>
  </OrbisProvider>
</template>

<script>
import {OrbisProvider} from "@orbisclub/components";
import {applyPureReactInVue} from "veaury";
export default {
  components: {

    OrbisProvider: applyPureReactInVue(OrbisProvider),
  },
props:{
  defaultOrbis:{
    type:Object,
    default:()=>{}
  }
},
  setup(props) {


  }
}
</script >

<style scoped>

</style>