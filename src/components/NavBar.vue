<template>
  <div class="bg-amber-900" id="nav">
    <button @click="goHome()" class="active mx-3">Home</button>
    <button @click="goAdmin()" class="active mx-3">Admin</button>
    <button @click="goCart()" class="active mx-3">Cart</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  methods: {
    goHome(){
      router.push('/home')
    },
    goCart(){
      router.push('/cart')
    },
    goAdmin(){
      router.push('/login')
    }
  }
}

</script>

<style lang="scss">
.nav a{
  text-align: center;
}
.icon{
  display: none;
}
</style>