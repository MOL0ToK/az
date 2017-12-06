<template>
<svg :class="className"
     :width="width || height"
     :height="height || width"
     :fill="fill">
  <use :xlink:href="link"></use>
</svg>
</template>

<script>
import ICONS from '@/assets/icons';

const ICON_PREFIX = 'e-icon';

export default {
  props: {
    width: Number,
    height: Number,
    fill: String,
    id: {
      type: String,
      required: true,
      validator: value => value in ICONS,
    },
  },
  created() {
    if (!this.width && !this.height) throw new Error('Size of icon is not defined');
  },
  computed: {
    link() {
      return '#' + ICONS[this.id].id;
    },
    className() {
      return [
        ICON_PREFIX,
        ICON_PREFIX + '__' + this.id,
      ];
    },
  },
};
</script>

<style lang="scss">
@import "./icon";
</style>
