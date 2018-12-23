<template>
  <div class="LevelMenu">
    <h1>Choose One Level:</h1>
    <div class="level-selector">
      <LevelButton levelId="Tutorial"/>
      <LevelButton levelId="Level 1"/>
    </div>
  </div>
</template>

<script>
import LevelButton from "@/components/LevelButton.vue";

export default {
  name: "level-menu",
  components: {
    LevelButton
  }
};
</script>


<style lang="scss" scoped>
.LevelMenu {
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
