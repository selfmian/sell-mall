<script setup lang="ts">
import Login from './views/login/index.vue'
</script>

<template>
  <!-- <Login /> -->
  <router-view></router-view>
</template>

<style scoped>
  #app{
    color: #666;
    text-align: center;
    background-color: #ededed;
    min-width: 1220px;
  }
  body {
    margin: 0;
  }
</style>
