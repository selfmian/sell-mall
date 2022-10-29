<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import { userLogin } from "../../api";
import { setStore } from "../../utils/storage";
import { useRouter } from "vue-router";

const router = useRouter();

const formRef = ref<FormInstance>();
const formModel = reactive({
  username: "",
  password: "",
  isConfirmAgreement: false,
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  formEl.validate(async (valid) => {
    if (!valid) return false;

    // 判断是否同意
    if (!formModel.isConfirmAgreement) {
      ElMessage.error("请务必仔细阅读用户协议，并同意该协议");
      return false;
    }
    // 正确的逻辑 - 登录
    const res = await userLogin(
      formModel.username,
      formModel.password,
      formModel.isConfirmAgreement
    );
    if (res && res != "") {
      // console.log(res);
      // 成功登录
      // 存 token 到 localStorage
      setStore("token", res);
      // 跳转首页
      router.push({ path: "/" });
    }
  });
};
</script>

<template>
  <div class="bg">
    <el-form
      ref="formRef"
      :model="formModel"
      label-width="120px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="username"
        label="用户名"
        :rules="[
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="formModel.username" />
      </el-form-item>
      <el-form-item
        :label="'密码'"
        :prop="'password'"
        type="password"
        :rules="{
          required: true,
          message: '密码不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="formModel.password" showPassword />
      </el-form-item>
      <el-form-item :prop="'isConfirmAgreement'">
        <el-checkbox
          v-model="formModel.isConfirmAgreement"
          label="是否同意用户使用协议"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style  scoped>
  /* .bg{
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/login-background.jpg') no-repeat;
    background-size: cover;
  } */
</style>