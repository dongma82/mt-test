import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com';
// Vue.use(VueAxios, axios)
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params = {
        ...config.params,
        appkey: "laiemily_1575803080682"
    }    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
export default axios;