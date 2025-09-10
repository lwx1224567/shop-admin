import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey="admin-token"
const cookies = useCookies()

//获取token
export function getToken(){
    return cookies.get(TokenKey)
}
//设置token
export function setToken(token){
    const expireDate = new Date()
    expireDate.setDate(expireDate.getDate() + 7)
    cookies.set(TokenKey, token, { expires: expireDate }) // 设置cookie，7天后过期

}
//删除token
export function removeToken(){
    cookies.remove(TokenKey)
}