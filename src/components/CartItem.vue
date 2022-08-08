<template>
  <div class="square">
    <div class="float">
    <img class="itemImage" :src="item.photoPath">
    </div>
    <div class="my-box">
    <div class="float mx-5">
      <h1 class="text-sm text-gray-700 ">{{ item.name }}</h1>
      <h2 class="text-sb text-gray-700 ">Price: {{item.price}}</h2>
    </div>
    <div class="float mx-5 x">
      <button @click="removeFromCart(this.item)">X</button>
    </div>
    </div>
  </div>
</template>

<script>
import {ItemStore} from "@/store/itemStore";

const itemStore = ItemStore();

export default {
  name: "CartItem",
  props: ["item"],
  // methods: {
    // removeFromCart(item){
    //   itemStore.removeFromCart(item)
    // }
  // }
}
</script>

<style scoped>
.square{
  height: 70px;
  border: 2px solid gray;
  min-width: 230px;
}

.itemImage {
  width: 66px;
  height: 66px;
  border: 2px solid chocolate;
}

.float {
  height: 70px;
  float: left;
  text-align: center;
  width: 10%
}
</style>