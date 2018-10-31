var gameConfig = new Vue({
  el: "#game-config",
  data: {
    show: false,
    width: 800,
    height: 600
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
});
