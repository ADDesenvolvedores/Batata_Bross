<template>
  <div class="main-menu">
    <ul>
      <li>
        <router-link to="/level-menu">Level Selection</router-link>
      </li>
      <li>
        <router-link to="/config">Configuration</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
a {
  color: red;
}
li {
  padding-top: 2%;
}
</style>
