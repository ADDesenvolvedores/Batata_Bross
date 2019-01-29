<template>
  <div class="LevelMenu">
    <h1>Choose One Level:</h1>
    <div class="level-selector">
      <router-link to="/tutorial" class="level-button">Tutorial</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "level-menu"
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

.level-button {
  background-color: greenyellow;
  background-image: linear-gradient(to bottom, yellowgreen, green);

  border: 3px solid #224400;

  width: 20%;
  height: 1.5rem;

  font-size: 1.2rem;
  text-align: center;

  color: black;
}
.level-button:hover {
  background-image: linear-gradient(to bottom, green, yellowgreen);
}
</style>
