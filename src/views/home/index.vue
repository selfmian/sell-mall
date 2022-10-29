<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in adsList.data" :key="item.id">
      <el-image  :src="item.url"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { homeGoodsList } from "../../api";
import { AdsModel } from "../../model/home";

const adsList = reactive({ data: <AdsModel[]>[] });

// 获取首页数据
const getHomeInfo = async () => {
  const res = await homeGoodsList();
  adsList.data = res.ads;
  console.log('ads')
  console.log(adsList.data)
  console.log(res);
};

onMounted(() => {
  getHomeInfo();
});
</script>

<style scoped>
  .el-carousel__container{
    height: 600px;
  }
</style>