<template>
  <div class="lv-button">
    <router-link to="/" :style="button-style"></router-link>
  </div>
</template>

<script>
export default {
  name: "LevelButton",
  props: {
    img: String
  },
  computed: {
    buttonStyle: function() {
      return {
        backgroundImage: url(this.img)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.lv-button {
  background-image: linear-gradient(to right, black, transparent);
}
</style>
