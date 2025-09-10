import { ElMessage } from 'element-plus'
//成功提示
export function successMessage(msg,dangerouslyUseHTMLString = false) {
   ElMessage({
    type: 'success',
    message: msg || '登录成功',
    dangerouslyUseHTMLString
  })
}

//失败提示
export function errorMessage(errorMsg,dangerouslyUseHTMLString = false) {
 // 如果传的是字符串，直接弹出
  if (typeof errorMsg === 'string') {
    ElMessage({
      type: 'error',
      message: errorMsg || '请求失败',
      dangerouslyUseHTMLString
    })
    return
  }

  // 如果传的是 axios 错误对象
  if (errorMsg && typeof errorMsg === 'object') {
    if (errorMsg.response) {
      ElMessage.error(errorMsg.response.data?.msg || "请求失败")
      console.error("后端错误：", errorMsg.response.data)
    } else {
      ElMessage.error('网络错误或服务器无响应')
      console.error("网络错误：", errorMsg)
    }
    return Promise.reject(errorMsg) // 保持 axios 的链式调用
  }

  // 兜底
  ElMessage.error('发生未知错误')
}
