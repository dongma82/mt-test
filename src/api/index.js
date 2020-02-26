import axios from './config'
var api = {
    menuList(){
        return axios.get("/api/meituan/index/nav.json")
    },
    headerSearch(){
        return axios.get("/api/meituan/header/search.json")
    },
    defaultContent(){
        return axios.get("/api/meituan/index/resultsByKeywords.json")
    },
    hotCity(){
        return axios.get("/api/meituan/city/hot.json")
    },
    getprovince(){
        return axios.get("/api/meituan/city/province.json")
    }
}
export default api;