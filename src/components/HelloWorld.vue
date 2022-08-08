<template>
  <h1>HelloWorld</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {

}
</script>

<style scoped lang="scss">
</style>
