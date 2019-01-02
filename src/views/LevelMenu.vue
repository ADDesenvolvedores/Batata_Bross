<template>
  <div class="level-menu">
    <h1>Choose One Level:</h1>
    <div class="level-selector">
      <StdRtButton path="/" content="Tutorial"/>
      <StdRtButton path="/" content="Level 1"/>
    </div>
  </div>
</template>

<script>
import StdRtButton from "@/components/StdRtButton.vue";

export default {
  name: "level-menu",
  components: {
    StdRtButton
  }
};
</script>

<style lang="scss" scoped>
.level-menu {
  h1 {
    font-size: 2rem;
    padding: 1%;

    color: white;
  }
}

.level-selector {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
