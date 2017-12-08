<template>
<div class="b-youtube-video">
  <iframe ref="frame" src="https://www.youtube.com/embed/g9cM7a7Mmm4" width="100%" height="400px" frameborder="0"></iframe>
</div>
</template>

<script>
export default {
  mounted() {
    const frame = this.$refs['frame'];
    const height = 0.4 * innerHeight;
    if (height < parseInt(frame.height)) {
      frame.height = height + 'px';
    }
  },
};
</script>
