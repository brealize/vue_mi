import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//相当于data
  state: {
	  goodList:[
		  // {
			 //  goodid:10000220,
			 //  sukid:2201100019,
			 //  num:10
		  // },
	  ]
  },
  
	//相当于computer
  getters:{
	  getGoodList(state){
		  return state.goodList;
	  }
  },
  
	//相当于methods
  mutations: {
	  addGood(state,good){
		  let canAdd = true;
		  state.goodList.forEach((item,index)=>{
			  if(item.id==good.id){
				  if(good.skuid==item.skuid){
					  canAdd = false;
					  item.num+=good.num
				  }
			  }
		  })
		  if(canAdd){
			  state.goodList.push(good)
		  }
	  },
	  remove(state,good){
		  let index = -1;
		  state.goodList.forEach((item,i) =>{
			 if(item.goodid==good.id&&item.skuid==good.skuid){
				 index=i;
			 }
		  })
		  if(index>=0){
			  state.goodList.splice(index,1)
		  }
	  },
	  changeNum(state,good){
		  state.goodList.forEach((item.index)=>{
			  if(item.goodid==good.id&&item.skuid==good.skuid){
				  item.num = good.num;
			  }
		  }) 
	  }
  },
  
	//相当于异步promise的methods
  actions: {
	  addGoodAsync(context,good){
		  content.commit("addGood",good)
	  },
	  removeAsync(state,good){
		 content.commit("remove",good) 
	  },
	  changeNumAsync(context,good){
		  context.commit("changeNum",good)
	  }
  },
	
	
  modules: {
  }
})
