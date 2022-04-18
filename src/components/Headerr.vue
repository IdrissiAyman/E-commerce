<template>
<header class="py-3">
      <div class="container-md d-flex justify-content-between align-items-center">
          <h2 class="text-white" >Shopee-Co</h2>
          <router-link to="/cardDetails" class="text-decoration-none">
            <h2 class="text-white cursor">
                <i class="fas fa-shopping-cart mx-1" ></i>
                {{$store.state.card.length}}
            </h2>
          </router-link>
      </div>
  </header>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";



export default defineComponent({
  
    name: 'Headerr',
    data(){
        return{
        }
    },
    methods:{
       
    }
})


</script>

<style lang="scss" scoped>
    header{
        background-color: #151466;
        h2{
            text-shadow: -1px 3px 2px rgba(78, 9, 9, 0.3);
            &.cursor{
                cursor: pointer;
            }
        }
    }
</style>