<template>
  <div>我是home</div>
</template>

<script setup lang="ts">
// fetch

import { onMounted, reactive } from 'vue';
import { homeGoodsList } from '../../api';

const homeInfoItem = reactive({ data: {} });

// 获取首页数据
const getHomeInfo = async () => {
  const res = await homeGoodsList();
  homeInfoItem.data = res;
  console.log(res);
}

onMounted(() => {
  getHomeInfo();
  })
</script>

<style scoped>
</style>