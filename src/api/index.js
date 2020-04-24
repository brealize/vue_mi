import axios from 'axios'

import './mockdata.js'

axios.defaults.baseURL = "http://520mg.com";

let getHomeDataAPI = (data)=>{
	return axios.get("/mi/page.php",{
		params:{
			page_type:data.page_type,
			page_id:data.page_id
		}
	})
}
let getCategoryDataAPI = ()=>{
	return axios.get("/mi/category.php"
	)
}
let getProductDataAPI = (data)=>{
	return axios.get("/mi/product.php",{
		params:{
			id:data.id
		}
	})
}
let sendsmsAPI = (data)=>{
	return axios.post("mi/sms.php",data)
}
let loginAPI = (data)=>{
	return axios.post("mi/login.php",data)
}
export {
	getHomeDataAPI,getCategoryDataAPI,getProductDataAPI,
	sendsmsAPI,loginAPI
}
