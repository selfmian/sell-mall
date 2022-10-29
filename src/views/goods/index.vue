<template>
  <div>我是商品列表</div>
  <h2>{{ params.k || "没有任何关键字" }}</h2>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const params = reactive({ k: "" });

onMounted(() => {
  params.k = route.query.k?.toString() || "";
});
onUpdated(() => {
  params.k = route.query.k?.toString() || "";
})
</script>

<style scoped>
</style>