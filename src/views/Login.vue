
<template>
<div style="background-color: white; color:black;background-image: url(../../1.jpg);">
<main class="login">
		<section class="forms">

			<form class="login" >
				<h2>Login</h2>
				<input style="background-color: black; color:white;"
					type="email" 
					placeholder="Email address"
					v-model="email" />
				<input style="background-color: black; color:white;"
					type="password" 
					placeholder="Password" 
					v-model="password" />
				
				 <router-link to="/home" class="text-decoration-none"> <input 
					type="submit"

				 v-on:click="connect()" /></router-link>
			</form>

		</section>
	</main>
</div>

<span> {{
    errorMessage
    }}
</span>
    <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" v-model="email" required>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  v-model="password" required>

     <button v-on:click="connect()" type="submit">Login</button>
</template>
 
//Script de la vue
<script lang="ts">
 
import { defineComponent } from "@vue/runtime-core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default defineComponent({
  name: "Nomdelavue",
  data() {
    return {
        email:"",
        password:"",
        errorMessage:"",
    };
  },
  methods: {
      connect(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
    // Signed in 
    alert("connect");
	
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.errorMessage= error.message;
	alert("verifier votre mot de passe ou bien votre identifiant ");
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
 .forms {
	display: flex;
	min-height: 100vh;
}
form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}
form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 101) 0%,
		rgb(189, 28, 60) 100%
	);
}
h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
	text-align: center;
}
input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}
form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}
form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}
form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>