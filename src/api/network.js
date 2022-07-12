import axios from 'axios'
import qs from 'qs'
// 进行一些全局配置
axios.defaults.baseURL = 'http://pinxue.ngrok.24k.fun/system'
axios.defaults.timeout = 3000;
axios.defaults.withCredentials = true;

//添加拦截器
axios.interceptors.request.use(function (config) {
  console.log("111",config)
  if(config.method!=='get'){
    config.data = qs.stringify(config.data)
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers.token = localStorage.getItem('token');
  return config
}, function (error) {
  return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(function (response) {
  //对响应数据做什么
  return response
}, function (error) {
  return Promise.reject(error)
})

// 封装get/post方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  all: function (list) {
    return new Promise(function (resolve, reject) {
      axios.all(list)
        .then(axios.spread(function (...result) {
          //两个请求都执行完成
          resolve(result)
        }))
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
