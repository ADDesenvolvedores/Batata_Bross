<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainTitle msg="Batata Bross"/>

    <div class="main-menu">
      <ul>
        <li>
          <StdRtButton path="/level-menu" content="Level Selection"/>
        </li>
        <li>
          <StdRtButton path="/config" content="Configuration"/>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from "@/components/MainTitle.vue";
import StdRtButton from "@/components/StdRtButton.vue";

export default {
  name: "home",
  components: {
    MainTitle,
    StdRtButton
  }
};
</script>

<style lang="scss" scoped>
li {
  margin-top: 2%;
}
</style>
