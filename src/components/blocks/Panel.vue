<template>
  <div
    class="hero-panel"
    :class="{
      'shadow-active': shadow && shadow.length > 0,
      'aspect-ratio-mode': ratio,
      'content-full-height': full,
      'centered-mode': centered,
      'bottom-mode': bottom,
    }"
    :style="styleHelper"
  >
    <slot name="backgroundShadow">
      <div class="panel-shadow"></div>
    </slot>
    <slot name="background">
      <!-- TODO thumbnail & lazyload -->
      <img
        v-if="backgroundType === 'image'"
        class="panel-background"
        :src="background"
        :alt="backgroundAlt"
        :title="backgroundTitle"
      />
      <div
        v-else-if="backgroundType === 'color'"
        class="panel-background"
        :style="{
          'background-color': background,
        }"
      />
      <div v-if="backgroundType === 'iframe'" class="panel-background">
        <div>
          <iframe
            :src="background"
            frameborder="0"
            allowfullscreen=""
            autoplay=""
            mute=""
            loop=""
          />
        </div>
      </div>
      <video
        v-else
        class="panel-background"
        preload="metadata"
        playsinline=""
        muted=""
        loop=""
        autoplay=""
      >
        <source :src="background" :type="backgroundType" />
      </video>
    </slot>
    <div class="panel-content">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, type PropType } from "vue";

const props = defineProps({
  /**
   * Height of panel
   * Min-height default. Become "height" when strict = true
   */
  height: {
    type: String,
    required: false,
  },

  /**
   * Background of panel
   */
  background: {
    type: String,
    required: false,
  },

  /**
   * Background type
   * Background can be an image, a video, an iframe or a color
   * In case of VIDEO, the type is the codec (es: mp4)
   * In case of CSS, it an image that will be used on background-image
   */
  backgroundType: {
    type: String as PropType<"image" | "iframe" | "color" | "css" | string>,
    default: () => "image",
    /*
    validator(type :string) {
      return ["image", "video", "url", "color"].includes(type)
    },
    */
  },

  /**
   * The thumbnail is used on image for lazyload (TODO)
   * or in the video as poster
   */
  backgroundThumbnail: {
    type: String,
    required: false,
  },

  /**
   * To apply an effect on the image
   * fixed: TODO (css only for now)
   * parallax: TODO
   */
  backgroundEffect: {
    type: String as PropType<"regular" | "fixed" | "parallax">,
    default: () => "regular",
    validator: (type: string) =>
      ["regular", "fixed", "parallax"].includes(type),
  },

  /**
   * Background title TAG
   * TODO with CSS use ARIA
   */
  backgroundTitle: {
    type: String,
    default: () => "",
  },

  /**
   * Background title ALT
   * TODO with CSS use ARIA
   */
  backgroundAlt: {
    type: String,
    default: () => "",
  },

  /**
   * Shadow to apply between content and background,
   * to enhance readability
   */
  shadow: {
    type: String,
    required: false,
  },

  /**
   * shadow opacity
   */
  shadowOpacity: {
    type: Number,
    default: () => 0.4,
  },

  /**
   * Background ratio (if needed)
   * ex: 16:9, 16/9, 16-9 or 16.9
   */
  ratio: {
    type: String,
    required: false,
  },

  /**
   * Content is centered
   * (default: top left)
   */
  centered: {
    type: Boolean,
    default: () => false,
  },

  /**
   * Content is at the bottom
   * (default: top)
   */
  bottom: {
    type: Boolean,
    default: () => false,
  },

  /**
   * Works with {height}
   * true = height
   * false = min-height
   */
  strict: {
    type: Boolean,
    default: () => false,
  },

  /**
   * SHORTCUT: height at 100vh
   * (use {strict} separately)
   */
  hero: {
    type: Boolean,
    default: () => false,
  },

  /**
   * full height of content TODO???
   */
  full: {
    type: Boolean,
    default: () => false,
  },

  /*
  backgroundHeight: {
      type: Number,
      required: false
  },
  backgroundWidth: {
      type: Number,
      required: false
  },
  */
});
/*
const trueBackgroundHeight = computed(() => {
  return (
    props.backgroundHeight ? props.backgroundHeight :
      props.backgroundWidth ? (
        props.backgroundWidth * (
          trueRatio.value > 0 ? trueRatio.value : 1
        )
      ) : null);
});
const trueBackgroundWidth = computed(() => {
  return (
    props.backgroundWidth ? props.backgroundWidth :
      props.backgroundHeight ? (
        props.backgroundHeight * (
          trueRatio.value > 0 ? trueRatio.value : 1
        )
      ) : null);
});
*/

/**
 * ratio translation
 * TODO : / - .
 */
const trueRatio = computed(() => {
  if (!props.ratio) {
    return 1;
  }
  const ratio = props.ratio.split("/");
  return parseFloat((parseFloat(ratio[1]) / parseFloat(ratio[0])).toFixed(2));
});

/**
 * Styles or CSS variables needed
 */
const styleHelper = computed(() => {
  // all styles
  const styles: Record<string, string | number> = {
    "--hero-panel-aspect-ratio": trueRatio.value * 100 + "%",
  };

  // height
  if (props.height || props.hero)
    styles[props.strict ? "height" : "min-height"] = props.height
      ? props.height
      : props.hero
      ? "100vh"
      : "auto";

  // shadow
  if (props.shadow) {
    styles["--hero-panel-shadow-color"] = props.shadow;
    styles["--hero-panel-shadow-opacity"] = props.shadowOpacity;
  }

  // background types
  if (props.background)
    switch (props.backgroundType?.toLowerCase()) {
      case "css":
        styles["background-image"] = "url('" + props.background + "')";
        if (props.backgroundEffect === "fixed")
          styles["background-attachment"] = "fixed";
        // TODO parallax
        break;
      case "color":
        styles["--hero-panel-background-color"] = props.background;
        break;
    }
  return styles;
});
</script>

<style lang="scss">
// TODO REMOVE overflow: hidden FROM &.aspect-ratio-mode  (for future mid-section or overflowing content)
$hero-panel-mobile-threshold: 600px !default;

.hero-panel {
  position: relative;
  z-index: 1;
  display: flex;

  background: var(--hero-panel-background-color);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;

  .panel-content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    & > * {
      width: 100%;
      margin: 0 auto;
      background-color: blue;
    }
  }

  .panel-background {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    -o-object-fit: cover;

    // Iframe are very problematic (es: Youtube)
    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150vw;
      height: 100vh;
      transform: translate(-50%, -50%);
      @media (min-width: $hero-panel-mobile-threshold) {
        width: 100vw;
      }
    }
  }

  .panel-shadow {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &.shadow-active {
    .panel-shadow {
      display: block;
      opacity: var(--hero-panel-shadow-opacity);
      background: var(--hero-panel-shadow-color);
    }
  }

  // centered
  &.centered-mode {
    align-items: center;
    justify-content: center;
    .panel-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  // bottom
  &.bottom-mode {
    align-items: flex-end;
    .panel-content {
      display: flex;
      align-items: flex-end;
    }
  }

  &.aspect-ratio-mode {
    overflow: hidden;
    .panel-background {
      object-fit: initial;
      height: 0;
      padding-bottom: var(--hero-panel-aspect-ratio);
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  // IFRAME MODES (youtube mostly)
  // never cut out content
  &.contained-iframe {
    iframe {
      max-width: 100%;
      max-height: 100%;
    }
  }
  // the VIDEO in the iframe is horizontal, ex: 16:9
  &.horizontal-iframe {
    iframe {
      width: 200vw; // because mobile width is very low
      @media (min-width: $hero-panel-mobile-threshold) {
        width: 100vw;
        max-height: 100%;
      }
    }
  }
  // the VIDEO in the iframe is vertical
  &.vertical-iframe {
    iframe {
      @media (min-width: $hero-panel-mobile-threshold) {
        max-width: 120%;
      }
    }
  }
}
</style>
