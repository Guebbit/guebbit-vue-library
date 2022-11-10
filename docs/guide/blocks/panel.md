# Regular panel
#
The BASIC Panel component
Change the various simple props to see the result

<br />

<Checkbox label="centered" v-model="centered" />
<Checkbox label="bottom" v-model="bottom" />
<Checkbox label="shadow" v-model="shadow" />
<Checkbox label="wallpaper" v-model="wallpaper" />
<Checkbox label="ratio" v-model="ratio" />

<br />
<br />

<Radiobox name="radioHeight" v-model="heightSelected" :items="heightList" />

<br />

# Image with element or CSS

<Panel
    background="http://placekitten.com/800/400"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

```vue{2}
<Panel 
    background="http://placekitten.com/800/400"
>
    <div class="content-example">
        LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```

<Panel
    background="http://placekitten.com/800/400"
    backgroundType="css"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>


```vue{2,3}
<Panel
    background="http://placekitten.com/800/400"
    backgroundType="css"
>
<div class="content-example">
        LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```

# Using slots

```vue{2,7}
<Panel>
    <template #background>
      <img
          class="panel-background"
          src="http://placekitten.com/800/400"
      />
    </template>
    <div class="content-example">
        LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```

# CSS colors

<Panel
    background="red"
    backgroundType="color"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

```vue{2,7}
<Panel>
    <template #background>
      <img
          class="panel-background"
          src="http://placekitten.com/800/400"
      />
    </template>
    <div class="content-example">
        LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```

# Video (regular)

<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="video/mp4"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

# Video (vertical)

<Panel
    background="http://assets.guebbit.com/guebbit/video/tall.mp4"
    backgroundType="video/mp4"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

# Video (very long)

<Panel
    background="http://assets.guebbit.com/guebbit/video/long.mp4"
    backgroundType="video/mp4"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

```vue{2,3}
<Panel
    background="PATH_TO_VIDEO"
    backgroundType="video/mp4"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```


# Iframe (regular)

Iframes are very difficult to manage so the result can be suboptimal or very bad.
<Badge type="danger" text="caution" />IMPORTANT: Use RATIO to adjust iframe size, ESPECIALLY on wallapaper mode

<Panel
    background="http://assets.guebbit.com/guebbit/video/normal.mp4"
    backgroundType="iframe"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
    :ratio="ratio ? '16:9' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

# Iframe (vertical)

<Panel
    background="http://assets.guebbit.com/guebbit/video/tall.mp4"
    backgroundType="iframe"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
    :ratio="ratio ? '1:4' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

# Iframe YOUTUBE (regular)
#

<Panel
    background="https://www.youtube.com/embed/iRwAekCcFow?playlist=iRwAekCcFow&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
    backgroundType="iframe"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
    :ratio="ratio ? '16:9' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

# Iframe YOUTUBE (vertical)
#

<Panel
    background="https://www.youtube.com/embed/bdPZ2Cu1vNU?playlist=bdPZ2Cu1vNU&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
    backgroundType="iframe"
    :height="heightSelected"
    :centered="centered"
    :bottom="bottom"
    :wallpaper="wallpaper"
    :shadow="shadow ? '#000' : undefined"
    :ratio="ratio ? '1:2' : undefined"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

```vue{2,3,11,12}
<Panel
    background="PATH_TO_VIDEO"
    backgroundType="iframe"
    ratio="16:9"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>

<Panel
    background="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?playlist=YOUTUBE_VIDEO_ID&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
    backgroundType="iframe"
    ratio="16:9"
>
    <div class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </div>
</Panel>
```

# Panel

The BASIC Panel component

| Prop                  | Description                                     | Accepted Values                              | Default     |
|:----------------------|:------------------------------------------------|:---------------------------------------------|:------------|
| `height`              | Panel's min-height, work with {strict}          | `px`, `vh`, `%`, etc                         | `undefined` |
| `background`          | Background media of panel (path)                | `string`                                     | `undefined` |
| `backgroundType`      | Background type of media (CSS is an image)      | `image`, `video`, `iframe`, `color` or `css` | `image`     |
| `backgroundThumbnail` | Background image's thumbnail or video post      | `string`                                     | `undefined` |
| `backgroundTitle`     | Background TAG TITLE                            | `string`                                     | `false`     |
| `backgroundAlt`       | Background TAG ALT                              | `string`                                     | `false`     |
| `shadow`              | shadow TAG color                                | `string`                                     | `#000000`   |
| `shadowOpacity`       | shadow TAG opacity                              | `string`                                     | `0.4`       |
| `centered`            | Content is centered                             | `boolean`                                    | `false`     |
| `bottom`              | Content will be bottom                          | `boolean`                                    | `false`     |
| `strict`              | If true, {height} become fixed height           | `boolean`                                    | `false`     |
| `hero`                | SHORTCUT: if height is not set it becomes 100vh | `boolean`                                    | `false`     |
| `wallpaper`           | Size of panel will be based on panel-background | `boolean`                                    | `false`     |
| `ratio`               | Background TAG fixed dimensions                 | `string` like 16/9                           | `undefined` |


| Slot               | Description        |
|:-------------------|:-------------------|
| `default`          | Content of Panel   |
| `background`       | Background element |
| `backgroundShadow` | Background shadow  |

<script setup>
import { ref } from "vue";
import Checkbox from "../../components/Checkbox.vue";
import Radiobox from "../../components/Radiobox.vue";
import { Panel } from "../../../src/";

const centered = ref(true);
const bottom = ref(false);
const shadow = ref(true);
const wallpaper = ref(false);
const ratio = ref(false);
const heightSelected = ref("400px");

const heightList = [
  {
    label: 'Full',
    value: '100vh',
  },
  {
    label: '400px',
    value: '400px',
  },
  {
    label: '200px',
    value: '200px',
  },
  {
    label: 'None (based on content)',
    value: undefined,
  },
];
</script>

<style>
.content-example{
  background-color: rgba(0, 0, 255, 0.5);
  padding: 40px 0;
}
.c-Checkbox + .c-Checkbox{
  margin-left: 12px;
}
</style>
