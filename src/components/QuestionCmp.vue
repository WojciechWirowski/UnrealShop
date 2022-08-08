<template>
  <div class="square m-1">
    <h1 class="">{{ question.message }}</h1>
  </div>
</template>

<script>
import {AdminStore} from "@/store/adminStore";
const adminStore = AdminStore();


export default {
  name: "QuestionCmp",
  props:["question"],
  methods: {
    answer(){
      adminStore.answer(this.question)
    }
  },

}
</script>

<style scoped>

</style>