<template>
  <div class="main-title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 3.5rem;
  font-weight: 900;
  color: red;
  background: linear-gradient(rgb(255, 70, 70), rgb(210, 0, 0));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: 1s;
}
h1:hover {
  transform: rotate(45deg);
  font-size: 5rem;
}

.main-title {
  margin-left: 32%;
  margin-right: 32%;
}
</style>
