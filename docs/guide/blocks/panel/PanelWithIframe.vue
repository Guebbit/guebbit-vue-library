<template>
  <Panel
    class="horizontal-iframe"
  >
    <template #background>
      <div class="panel-background">
        <div>
          <iframe
            src="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
            frameborder="0"
            allowfullscreen=""
            autoplay=""
            mute=""
            loop=""
          ></iframe>
        </div>
      </div>
    </template>
    <template #default>
      <span class="content-example">
        Horizontal frame
      </span>
    </template>
  </Panel>

  <Panel
    class="vertical-iframe"
  >
    <template #background>
      <div class="panel-background">
        <div>
          <iframe
            src="https://www.youtube.com/embed/bdPZ2Cu1vNU?playlist=bdPZ2Cu1vNU&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
            frameborder="0"
            allowfullscreen=""
            autoplay=""
            mute=""
            loop=""
          ></iframe>
        </div>
      </div>
    </template>
    <template #default>
      <span class="content-example">
        Vertical frame
      </span>
    </template>
  </Panel>
</template>

<script setup lang="ts">
import { Panel } from '../../../../src/';
</script>
