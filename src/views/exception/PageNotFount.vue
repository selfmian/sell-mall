<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleGoHome = async () => {
  router.push({ path: "/" });
};
</script>
<template>
  <el-result title="404" sub-title="页面跑丢了">
    <template #icon>
      <el-image src="https://qsl-tire-mall.oss-cn-beijing.aliyuncs.com/goods/no_img.png" />
    </template>
    <template #extra>
      <el-button type="primary" @click="handleGoHome">回到页面</el-button>
    </template>
  </el-result>
</template>

<style scoped>
</style>