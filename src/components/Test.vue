<template>
  <div>
    <p>window width: {{ width }}</p>
    <p>window height: {{ height }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>