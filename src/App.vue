<template>
  <div id="app">
    <div id="nav">
      <h1>Dev Nav</h1>
      <router-link to="/">Home</router-link>|
      <router-link to="/level-menu">Level Menu</router-link>|
      <router-link to="/config">Configuration</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6e6e6;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65),
    transparent
  );

  min-height: 800px;
}
#nav {
  background-color: #73cfa673;

  padding: 20px;

  a {
    font-weight: bold;
    color: #e7e7e7;
    &.router-link-exact-active {
      color: #39db92;
    }
  }
}
</style>
