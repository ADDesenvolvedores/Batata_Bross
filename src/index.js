import Vue from "vue";
import "@components/_globals";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
});
