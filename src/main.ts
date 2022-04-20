import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import { initializeApp } from "firebase/app";

import store from './store'







// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5HAwFYXlFxBXIvEwu9vn6QpM5TBYjOdo",
  authDomain: "e-comerce-67c91.firebaseapp.com",
  projectId: "e-comerce-67c91",
  storageBucket: "e-comerce-67c91.appspot.com",
  messagingSenderId: "1081779811051",
  appId: "1:1081779811051:web:353b86dd2da8e65e4b44ae"
};
const app = initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')
// Initialize Firebase
//const app2 = initializeApp(firebaseConfig);
//app.use(router);

//app.mount("#app");
 //app=initializeApp(firebaseConfig);




