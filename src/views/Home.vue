<template>
<Headerr/>
<Products />
</template>
 

<script lang="ts">
 
import { defineComponent } from "@vue/runtime-core";
import { getAuth, signOut } from "firebase/auth";
import Headerr from "../components/Headerr.vue";
import Products from '../components/Products.vue'

export default defineComponent({
  name: "Home",
  data() {
    return {
    };
  },
  components:{
    Headerr,Products
},
  
  
  
  methods: {
    disconnect(){
      const auth = getAuth();
    signOut(auth).then(() => {
      this.$router.push("/")
   }).catch((error) => {
   // An error happened.
});
    }
 
  },
  mounted() {
 
  },
});
</script>
 
//Style pour cette vue
<style scoped>
@import "@/assets/base.css";
 
</style>