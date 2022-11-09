<Panel>
    <template v-slot:default>
        <h1>{{'CIAONE'}}</h1>
    </template>
</Panel>

# Default
#
Regular panel

<PanelDefault />

```vue
xxxxxxxxx (con e senza slots)

<Panel background="http://placekitten.com/800/400">
    <span class="content-example">
      LOREM IPSUM SIT DOLOR AMET
    </span>
</Panel>
```


# Panel

The BASIC Panel component

| Prop                   | Description                                         | Accepted Values         | Default      |
|:-----------------------|:----------------------------------------------------|:------------------------|:-------------|
| `height`               | Panel's min-height, work with {strict}              | `px`, `vh`, `%`, etc    | `undefined`  |
| `background`           | Background CSS color                                | `string`                | `undefined`  |
| `backgroundThumbnail`  | Background image's thumbnail                        | `string` with url image | `undefined`  |
| `backgroundImage`      | Background image                                    | `string` with url image | `undefined`  |
| `backgroundImageCss`   | Background CSS via background-image                 | `string` with url image | `undefined`  |
| `fixed`                | background CSS image fixed effect                   | `boolean`               | `false`      |
| `backgroundTitle`      | Background TAG TITLE                                | `string`                | `false`      |
| `backgroundAlt`        | Background TAG ALT                                  | `string`                | `false`      |
| `shadow`               | shadow TAG color                                    | `string`                | `#000000`    |
| `shadowOpacity`        | shadow TAG opacity                                  | `string`                | `0.4`        |
| `centered`             | Content centered                                    | `boolean`               | `false`      |
| `centeredTop`          | Content centered horizontally and TOP vertically    | `boolean`               | `false`      |
| `centeredBottom`       | Content centered horizontally and BOTTOM vertically | `boolean`               | `false`      |
| `strict`               | If true, {height} become fixed height               | `boolean`               | `false`      |
| `hero`                 | SHORTCUT: if height is not set it becomes 100vh     | `boolean`               | `false`      |
| `full`                 | Full height of content                              | `boolean`               | `false`      |
| `ratio`                | Background TAG fixed dimensions                     | `string` like 16/9      | `undefined`  |
| `backgroundHeight`     | fixed background height, work with ratio            | `px`, `vh`, `%`, etc    | `undefined`  |
| `backgroundWidth`      | fixed background width, work with ratio             | `px`, `vh`, `%`, etc    | `undefined`  |


| Slot               | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `default`          | Content of Panel                                     |
| `background`       | Background element (can be image, video, frame, etc) |
| `backgroundShadow` | Background shadow                                    |

<script setup>
import { Panel } from "../../../../src/";
import PanelDefault from "./PanelDefault.vue";
</script>

<style>
.hero-panel{
  min-height: 30vh;
}
.content-example{
  background-color: red;
}
</style>
