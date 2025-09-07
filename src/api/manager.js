import axios from "~/axios";
// 序列化参数
function toFormUrlEncoded(data) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&')
}


export function login(data) {
  return axios.post("http://ceshi13.dishait.cn/admin/login", toFormUrlEncoded({ 
    username: data.username,
    password: data.password
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}



export default {
  login,
};
