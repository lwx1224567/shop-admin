<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="h2">用户登录</h2>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginFormRef"
        label-position="top"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="loginForm.remember">记住我</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            class="w-full"
            :loading="loading"
            @click="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
     
      <div class="text-sm text-gray-600 mt-4 text-center">
        没有账号？
        <router-link to="/register" class="text-blue-600 underline hover:text-blue-800">
          去注册
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login,getInfo } from '~/api/manager'
import { successMessage, errorMessage } from '~/composables/util'
import { useRouter } from 'vue-router'
import { getToken, setToken, removeToken } from '~/composables/auth'

const router = useRouter()


const loginFormRef = ref(null)
const loading = ref(false)

const loginForm = ref({
  username: '',
  password: '',
  remember: false,
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur', showPassword: true }
  ],
  remember: [
    { type: 'boolean', required: true, message: '请勾选记住我', trigger: 'change' }
  ],

}

function handleLogin() {
  loginFormRef.value?.validate((valid, fields) => {
    if (!valid) {
      console.log('验证失败:', fields)
      return
    }

    loading.value = true

   // 调用 login 方法(3.7)
    login(loginForm.value)
      .then(res => {
        successMessage() // 显示登录成功消息
        setToken(res.token) // 存储 token
         console.log("存入的 token:", res.token)
        router.push('/')
        // 登录成功后的逻辑
      })
       .finally(() => {
        loading.value = false
      })
  })
}

</script>

<style scoped>

.login-container {
  @apply w-screen h-screen flex items-center justify-center 
         bg-cover bg-center bg-no-repeat 
         px-4 sm:px-6 md:px-10 py-8;
  background-image: url('/src/assets/login-1.jpg');
}
.login-card{
    @apply w-full max-w-xs sm:max-w-sm md:max-w-md 
    lg:max-w-lg p-4 sm:p-6 backdrop-blur 
    bg-white/70 flex flex-col items-center
    shadow-lg hover:shadow-2xl;
}
.h2{
  @apply text-2xl font-semibold mb-6 text-center;
}
</style>
