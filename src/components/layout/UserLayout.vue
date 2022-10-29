<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><Header></Header></el-header>
      <el-main class="main"><router-view></router-view></el-main>
      <el-footer class="footer"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.header {
  height: 160px;
}
.footer {
  height: 140px;
}
.el-main {
  --el-main-padding: 0;
}
.el-header {
  --el-header-padding: 0;
}
.el-footer {
  --el-footer-padding: 0;
}
.main{
  min-height: 500px;
  width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>