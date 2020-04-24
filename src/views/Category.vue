<template>
	<div class="category">
		<div class="search1" style="width: 6.8rem;height: 0.6rem; background-color: #f2f2f2;">
			<van-icon name="arrow-left" size="0.5rem" @click="returnl"/>
			<input type="text" placeholder="搜索商品" @click="gotoSearch" v-model="key">
			<van-icon name="search" size="0.5rem" @click="search"/>
		</div>
		<div class="body">
			<div class="left">
				<van-sidebar  v-model="activeKey" >
				  <van-sidebar-item v-for="(item,index) in datas" :key="index" :title="item.category_name" />
				</van-sidebar>
			</div>
			<div class="right">
				<div v-if="activeKey == index" v-for="(data,index) in datas" :key="index">
					<div class="group" v-for="(item,index) in data.category_list" :key="index">
						<div v-if="item.view_type=='cells_auto_fill'">
							<img :src="item.body.items[0].img_url" :style="{width:item.body.w/100+'rem',height:item.body.h/100+'rem'}">
						</div>
						<div class="category_title" v-if="item.view_type=='category_title'">
							<van-divider>{{item.body.category_name}}</van-divider>
						</div>
						<div class="category_group" v-if="item.view_type=='category_group'">
							<div class="good" v-for="good in item.body.items">
								<router-link v-if="good.action.type=='product'" :to="{name:'Detail',params:{id:good.action.path }}">
									<img :src="good.img_url" alt="" style="width: 1.2rem;">
									<div>{{good.product_name}}</div>
								</router-link>
								<div v-else>
									<img :src="good.img_url" alt="" style="width: 1.2rem;">
									<div>{{good.product_name}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	.category{
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
		.body{
			.right{
				position: absolute;
				left:25%;
				top: 1rem;
				bottom: 0;
				right: 0;
				overflow-y: scroll;
				.group{
					.category_group{
						display: flex;
						flex-wrap: wrap;
						.good{
							flex-basis: 33%;							
							max-width: 33%;
							color:#999;				
						}
						img{
							width: 100%;
						}
					}
				}
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
		activeKey:0,
		datas:[]
	  }
  },
  created(){
	this.$api.getCategoryDataAPI().then(res=>{
		this.datas=res.data.data
		console.log(this.datas)
	}).catch(err=>{
		console.log('请求错误',err)
	})  
  },
  methods:{
  	  returnl(){
  		  this.$router.go(-1);
  	  },
  	  gotoSearch(key){
  			 this.$router.push({
  				 name:"SearchResult",
  				 query:{
  				 		key:this.key
  				 	}
  			 }) 
  		  },
  		  search() {
  		  		  if(this.key.length>0){	  
  		  			  this.gotoSearch(this.key)
  		  
  		  		  }
  		          
  		        }
  	  },
}
</script>
