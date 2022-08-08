<template>
<div v-for="question in questions" v-bind:key="question.id">
  <QuestionCmp :question="question"/>
</div>
</template>

<script>
import {AdminStore} from "@/store/adminStore";
import QuestionCmp from "@/components/QuestionCmp";


const adminStore = AdminStore()
let questions = []

export default {
  name: "AdminView",
  components: {QuestionCmp},
  data(){
    return{
      questions,
    }
  },
  async created() {
    questions = await adminStore.getAllQuestions()
  },
  methods:{

  }
}
</script>

<style scoped>
.x{
  font-size:80px
}
</style>