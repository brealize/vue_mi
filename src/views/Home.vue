<template>
	<div class="home">
		<div class="search" style="width: 6.8rem;height: 0.6rem; background-color: #f2f2f2;">
			<img class="logo" src="../assets/img/logo.png" alt="" style="width: 0.48rem;">
			<input type="text" placeholder="搜索商品" @click="gotoSearch">
			<img src="../assets/img/mine.png" alt="" style="width: 0.6rem;" @click="gotoMine">
		</div>
		<van-tabs v-model="active" color="#ed5b00" title-active-color="#ed5b00" sticky offset-top="0">
		  <van-tab v-for="(item,index) in tabs" :title="item.name" :key="index">
		    <hometab :item="item"></hometab>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<style lang="less">
	.home{
		.search{
			display: flex;
			justify-content: space-between;
			padding: 0.12rem 0.2rem;
			.logo{
				padding: 0.12rem 0;
			}
			input{
				width: 5.2rem;
				background-color: #fff;
			}
		}
	}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import hometab from '@/components/HomeTab.vue'

export default {
	name:"Home",
  components: {
	  hometab
  },
  data(){
	  return{
		tabs:[],
		active: 0
	  }
  },
  methods:{
	 gotoSearch(){
		 this.$router.push("/search")
	 } ,
	 gotoMine(){
		 this.$router.push("/mine") 
	 }
  },
  created(){
	  this.$api.getHomeDataAPI({
		  "page_type":"home"
	  }).then(res =>{
		  console.log("请求成功",res.data.data);
		  this.tabs = res.data.data.tabs
	  }).catch(err=>{
		  console.log("请求失败",err);
	  })
  }
}
</script>
