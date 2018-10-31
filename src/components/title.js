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
