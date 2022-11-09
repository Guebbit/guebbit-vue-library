<template>
  <button @click="centered = !centered">centered {{centered}}</button>
  <button @click="bottom = !bottom">bottom {{bottom}}</button>
  <button @click="shadow = !shadow">shadow {{shadow}}</button>
  <Panel
    :centered="centered"
    :bottom="bottom"
    :shadow="shadow ? '#000' : undefined"
  >
    <template #background>
      <img
        class="panel-background"
        src="http://placekitten.com/800/400"
      />
    </template>
    <span class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </span>
  </Panel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Panel } from '../../../../src/';

const centered = ref(true);
const bottom = ref(false);
const shadow = ref(true);
</script>
