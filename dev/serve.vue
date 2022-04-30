<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { GuebbitVueLibrarySample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  GuebbitVueLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <guebbit-vue-library-sample />
  </div>
</template>
