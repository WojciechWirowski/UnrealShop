<template>
  <div class="square m-1">
    <h1 class="mt-4 text-sm text-gray-700">{{ item.name }}</h1>
    <h2 class="m-1 text-sb text-gray-700">{{item.price}}</h2>
    <img class="itemImage" :src="item.photoPath">
    <button @click="addItemToCart(this.item)">Add to cart</button>
  </div>
</template>

<script lang="ts">
import {ItemStore} from "@/store/itemStore";
import {Item} from "@/models/Item";

const itemStore = ItemStore();

export default {
  name: "ItemCmp",
  props: ["item"],
  methods: {
    addItemToCart(item: Item){
      itemStore.addItemToCart(item)
          //{id: item.id, name: item.name, photoPath: item.photoPath, price: item.price}
      console.log(itemStore.getCartItems)
    }
  }
}
</script>

<style scoped>
.square{
  border-radius: 25px;
  padding: 20px;
  width: 300px;
  height: 400px;
  border: 2px solid chocolate;
}

.itemImage {
  width: 250px;
  height: 250px;
}
</style>