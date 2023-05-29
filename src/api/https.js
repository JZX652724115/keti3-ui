import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
// 创建一个 axios 实例
const service = axios.create({
   baseURL: 'http://localhost:8080/', // 所有的请求地址前缀部分
   timeout: 60000, // 请求超时时间毫秒
   withCredentials: true, // 异步请求携带cookie
   headers: {
      // 设置后端需要的传参类型
      'Content-Type': 'application/json',
      'token': 'your token',
      'X-Requested-With': 'XMLHttpRequest',
   },
})
let loadingE
// 添加请求拦截器
service.interceptors.request.use(
   function(config) {
      // 在发送请求之前做些什么
      loadingE = ElLoading.service({
         lock: true,
         text: '加载中...',
         fullscreen: true,
         background: 'rgba(0, 0, 0, 0.7)',
      })
      return config
   },
   function(error) {
      // 对请求错误做些什么
      console.log(error)
      return Promise.reject(error)
   }
)

// 添加响应拦截器
service.interceptors.response.use(
   function(response) {
      if (loadingE) loadingE.close()

      return response
   },
   function(error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      if (loadingE) loadingE.close()
      console.log('error.response', error)
      if(error.response) {
         ElMessage.warning(error.response.data.result || error.response.data.message || error.message || '请求失败!')
      }
      else {
         ElMessage.warning('请求失败!')
      }

      return Promise.reject(error)
   }
)

export default service