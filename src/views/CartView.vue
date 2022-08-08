<template>
  <div>
    <div class="list" v-for="item in items" v-bind:key="item.id">
      <CartItem :item="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import CartItem from "@/components/CartItem.vue";
import {Item} from "@/models/Item";
import {ItemStore} from "@/store/itemStore";

const itemStore = ItemStore();
let items: Item[] = itemStore.getCartItems

export default {
  name: "CartView",
  components: {CartItem},
  data() {
    return{
      items
    }
  },
}
</script>

<style scoped>

</style>