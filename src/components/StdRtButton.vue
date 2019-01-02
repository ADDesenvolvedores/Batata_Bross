<template>
  <transition name="fade">
    <router-link :to="path" class="std-rtbutton">{{ content }}</router-link>
  </transition>
</template>

<script>
export default {
  name: "StdRtButton",
  props: {
    content: String,
    path: String
  }
};
</script>

<style lang="scss" scoped>
.std-rtbutton {
  background-image: linear-gradient(to right, black, transparent);

  width: 20%;
  height: 1.3rem;

  padding: 0.3rem;

  font-size: 1.2rem;
  text-align: center;

  color: white;
}:hover {
  background-image: linear-gradient(to right, black 90%, transparent);
}
</style>
