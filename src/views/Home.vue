<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainTitle msg="Batata Bross"/>
    <MainMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from "@/components/MainTitle.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "home",
  components: {
    MainTitle,
    MainMenu
  }
};
</script>

<style lang="scss">
</style>
