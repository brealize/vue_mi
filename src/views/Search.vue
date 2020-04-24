<template>
	<div class="search">
		<div class="search1" style="width: 6.8rem;height: 0.6rem; background-color: #f2f2f2;">
			<van-icon name="arrow-left" size="0.5rem" @click="returnl"/>
			<input type="text" placeholder="搜索商品" @click="gotoSearch" v-model="key">
			<van-icon name="search" size="0.5rem" @click="search"/>
		</div>
		<div>搜索历史</div>
		<van-tag @click="search(item)"  class="tag" v-for="(item,index) in historytags" :type=" tagtypes[  Math.floor(Math.random()*tagtypes.length)  ]  " size="large">{{item}}</van-tag>
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f16f6b7bf78a97a99c48fbbaa69d1c9e.jpg?w=1080&h=300&bg=F3F8F4" style="width: 6.8rem;" alt="">
		<div>热门搜索</div>
		<van-tag  @click="search(item)"  class="tag" v-for="(item,index) in hottags" :type=" tagtypes[  Math.floor(Math.random()*tagtypes.length)  ]  " size="large">{{item}}</van-tag>
	</div>
</template>

<style lang="less">
	.search{
		.search1{
			display: flex;
			justify-content: space-between;
			padding: 0.12rem 0.2rem;
			.logo{
				padding: 0.12rem 0;
			}
			input{
				width: 5.2rem;
				background-color: #fff;
				border:none
			}
		}
	}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
	  
  },
  data(){
	  return{
		key:'',  
		hottags:["手机","电脑","手办","电源","数据线"],
		historytags:["电视","红米"],
		tagtypes:["primary","success","danger","warning"]
	  }
  },
   methods: {
  	  gotoSearch(searchText){
  		  this.$router.push({
  			  name:"SearchResult",
  			  query:{
  				  key:searchText
  			  }
  		  })	
  	  },
  	  
        returnl() {
          // this.$toast('返回');
  		this.$router.go(-1);
  		
        },
        search() {
  		  if(this.value.length>0){	  
  			  this.search(this.value)
  
  		  }
          
        },
    }
}
</script>
