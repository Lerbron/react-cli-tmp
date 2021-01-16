import axios from 'axios';
import Qs from 'qs'


const http = axios.create({
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'repeat'})
  }
});
http.interceptors.request.use(config=>{
  
	return config;
}, (error)=> {
  // 对请求错误做些什么
  console.log('err:', error)
  return Promise.reject(error);
});

http.interceptors.response.use(response => {
  return response.data;
}, err => {
  let errResponse = err.response
  
  return Promise.reject(errResponse);

})
export default http
