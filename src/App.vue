<template>
  <NavBar></NavBar>
  <RouterView />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import NavBar from "@/components/NavBar";
// import {ItemStore} from "@/store/itemStore";
// import {UserStore} from "@/store/userStore";
//
// const itemStore = ItemStore()
// const userStore = UserStore()

export default {
  components: {NavBar}
}
</script>