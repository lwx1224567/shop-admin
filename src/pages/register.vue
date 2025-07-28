<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2 class="h2">用户注册</h2>

      <el-form :model="registerForm" :rules="rules" ref="registerFormRef" label-position="top" status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" type="password" placeholder="请输入密码" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" type="password" placeholder="请再次输入密码" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
  type="primary"
  class="w-full"
  :loading="loading"
  @click="handleRegister"
  >注册</el-button>
        </el-form-item>
      </el-form>

      <!-- 跳转登录提示 -->
      <div class="text-sm text-gray-600 mt-4 text-center">
        已有账号？
        <router-link to="/login" class="text-blue-600 underline hover:text-blue-800">
          去登录
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const registerFormRef = ref(null)
const loading = ref(false)

const registerForm = ref({
  username: '',
  password: '',
  confirmPassword: '',
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== registerForm.value.password) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
}

function handleRegister() {
  registerFormRef.value?.validate((valid, fields) => {
    if (!valid) {
      console.log('验证失败:', fields)
      return
    }

    loading.value = true

    // 模拟异步注册操作
    setTimeout(() => {
      loading.value = false
      alert(`注册成功！用户名：${registerForm.value.username}`)
      // 注册成功后跳转到登录页
    }, 1500)
  })
}
</script>

<style scoped>
.register-container {
  @apply w-screen h-screen flex items-center justify-center 
         bg-cover bg-center bg-no-repeat 
         px-4 sm:px-6 md:px-10 py-8;
  background-image: url('/src/assets/login-1.jpg');
}
.register-card{
    @apply w-full max-w-xs sm:max-w-sm md:max-w-md 
    lg:max-w-lg p-4 sm:p-6 backdrop-blur 
    bg-white/70 flex flex-col items-center
    shadow-lg hover:shadow-2xl;
}
.h2{
  @apply text-2xl font-semibold mb-6 text-center;
}
</style>
