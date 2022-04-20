import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    
    {
      path: "/Product/:id",
      name: "ProductDetails",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductDetails.vue"),
      

    },

    {
      path: "/Paiement",
      name: "Paiement",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/paiement.vue"),
      

    },

    {
      path: "/cardDetails",
      name: "CardDetails",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CardDetails.vue"),
      

    },
  
  
    {
      path: "/",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Login.vue"),
      

    },
    
    {
      path: "/home",
      name: "Home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Home.vue"),
      meta:{
        authRequired:true,
      },

    },
  ],
});
router.beforeEach((to,from,next)=>{
  const authRequired=to.matched.some((x) => x.meta.authRequired)
  const auth=getAuth();
  onAuthStateChanged(auth,(user:any) =>{
    if(authRequired && user==null){
      next("/");
    }
    else{
      next();
    }
  })
})


export default router;