<template>
  <div class="config-win" v-bind:style="winStyle">
    <input class="config-button" type="button" value="Configuration" @click="toggle()">
    <transition name="fade">
      <aside class="game-config" v-show="show">
        <h1>Game Configuration</h1>
        <section class="config-section">
          <h2>Window</h2>
          <div class="config-box">
            <h3>Width:</h3>
            <input
              class="config-input"
              type="number"
              placeholder="Type a width value"
              v-model="consoleWidth"
              v-on:input="$emit('input', $event.target.value)"
            >
          </div>
          <div class="config-box">
            <h3>Height:</h3>
            <input
              class="config-input"
              type="number"
              placeholder="Type a heigth value"
              v-model="consoleHeight"
              v-on:input="$emit('input', $event.target.value)"
            >
          </div>
        </section>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {
  name: "config-win",
  props: {
    winWidth: String
  },
  data: function() {
    return {
      show: true,
      consoleWidth: 800,
      consoleHeight: 600
    };
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  },
  computed: {
    winStyle: function() {
      return {
        width: this.winWidth
      };
    }
  }
};
</script>

<style lang="scss" scoped>
/*** CONFIGURATION WINDOW ***/
.config-win {
  display: flex;
}

.config-button {
  padding: 1%;
  min-height: 10rem;

  background-color: greenyellow;
  background-image: linear-gradient(to bottom, yellowgreen, green);

  border: 3px solid #224400;

  font-size: 1.2rem;
}
.config-button:hover {
  background-image: linear-gradient(to bottom, green, yellowgreen);
}

.game-config {
  flex-grow: 1;

  background-color: green;
  background-image: linear-gradient(to bottom, yellowgreen, green);

  border: 3px solid #224400;
  padding: 1%;

  /* height: 500px;
  width: 96.5%; */
}

.game-config > h1 {
  background-image: linear-gradient(
    to right,
    rgba(200, 200, 200, 0),
    rgba(18, 110, 0, 0.5),
    rgba(200, 200, 200, 0)
  );
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: bottom center;

  padding: 2%;
  padding-left: 4%;
  margin-bottom: 2%;

  font-size: 150%;
}

.config-section > h2 {
  background-image: linear-gradient(
    to right,
    rgba(200, 200, 200, 0),
    rgb(22, 130, 0),
    rgba(200, 200, 200, 0)
  );
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom center;

  padding: 1.5%;
  padding-left: 7%;
  margin-bottom: 1.5%;

  font-size: 125%;
}

.config-box {
  display: flex;
  display: -webkit-flex;

  justify-content: space-between;

  font-size: 100%;
}

.config-input {
  width: 40%;
  height: 1rem;
  font-size: 100%;
}
/*** CONFIGURATION WINDOW ***/

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
