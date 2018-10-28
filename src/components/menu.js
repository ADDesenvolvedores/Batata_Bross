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

var titleScreen = new Vue({
  el: "#title-screen",
  data: {
    show: true
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
});
