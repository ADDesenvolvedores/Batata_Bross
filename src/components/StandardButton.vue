<template>
  <router-link class="lv-button" to="/">{{ content }}</router-link>
</template>

<script>
export default {
  name: "LevelButton",
  props: {
    content: String
  }
};
</script>

<style lang="scss" scoped>
.lv-button {
  background-image: linear-gradient(to right, black, transparent);

  width: 20%;
  height: 1.3rem;

  padding: 0.2rem;

  font-size: 1.2rem;
  text-align: center;

  color: white;
}
</style>
