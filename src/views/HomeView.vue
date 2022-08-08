<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<!--    search-->
    <div>
    </div>
    <div>
      <div class="list" v-for="item in items" v-bind:key="item.id">
        <ItemCmp :item="item"/>
      </div>
    </div>
<!--    messages-->
  <div>
    <button @click="logOut">log out</button>
    <h1>{{message}}</h1>
    <button @click="btn">check name</button>
  </div>
  </div>
</template>

<script lang="ts">
import {UserStore} from "@/store/userStore";
import {ItemStore} from "@/store/itemStore";
import router from "@/router";
import {ref} from "vue";
import {Item} from "@/models/Item";
import ItemCmp from "@/components/ItemCmp.vue";

const userStore = UserStore();
const itemStore = ItemStore();
let items: Item[]
const message = ref("")
const filter = ref("")

export default {
  components: {ItemCmp},
  data() {
    return{
      items,
      message,
      filter
    }
  },
  async created() {
    items = await itemStore.getAllItems
  },
  methods:{
     btn() {
  message.value = userStore.loggedInUser.username
     },
    logOut(){
      userStore.logOut()
      router.push("/")
    }
}
}
</script>
<style>
.list{
  display:inline-block;
}
</style>
