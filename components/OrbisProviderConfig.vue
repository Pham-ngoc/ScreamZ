<template>
  <OrbisProvider :defaultOrbis="orbis"></OrbisProvider>
</template>

<script>
import {OrbisProvider} from "@orbisclub/components";
import {applyPureReactInVue} from "veaury";
export default {
  components: {

    OrbisProvider: applyPureReactInVue(OrbisProvider),
  },
  props: {
    orbis: {
      type:Object,
    },

  },

  setup(props) {


  }
}
</script >

<style scoped>

</style>