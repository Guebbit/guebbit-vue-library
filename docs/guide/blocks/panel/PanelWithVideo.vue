<template>
  <Panel>
    <template #background>
      <video class="panel-background" preload="metadata" playsinline="" muted="" loop="" autoplay="">
        <source
          src="https://cdn.virtual-room.com/app/uploads/2018/12/teaser-home-virtualroom.mp4"
          type="video/mp4"
        >
      </video>
    </template>
    <span class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </span>
  </Panel>
</template>

<script setup lang="ts">
import { Panel } from '../../../../src/';
</script>
