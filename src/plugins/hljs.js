import Vue from "vue";
import vueHljs from "vue-hljs";
import hljs from "highlight.js";
//if you want to use default color, import this css file
// import "vue-hljs/dist/style.css";
import "highlight.js/styles/dracula.css"

//use
Vue.use(vueHljs, { hljs })