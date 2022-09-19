<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({ count: 0 });
const autoAdd = () => {
  setInterval(()=> {
    data.count++
  },1000);
}
autoAdd();
</script>

<template>
  <h1>这里面可以写内容了{{data.count}}</h1>
</template>

<style scoped>
</style>