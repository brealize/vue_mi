<template>
	<div class="hometab">
		<div v-for="(data,index) in datas" :key="index" class="data">
			<div v-if="data.view_type=='gallery'">
				<van-swipe :autoplay="3000">
					<van-swipe-item v-for="(item, index) in data.body.items" :key="index">
					<router-link v-if="item.action.type=='product'" :to="{name:'Detail',params:{id:item.action.path}}">
						<img v-lazy="item.img_url" :style="{width:item.w/100+'rem',height:item.h/100+'rem'}"/>
					</router-link>
					</van-swipe-item>
				</van-swipe>
			</div>
			<div v-if="data.view_type=='divider_line'">
				<van-divider :style="{color:'#1989fa',borderColor:data.body.line_color,padding:data.body.line_height+' 0.16rem'}"></van-divider>	
			</div>
			<div v-if="data.view_type=='cells_auto_fill'" :style="{width:data.body.w/100+'rem',height:data.body.h/100+'rem',position:'relative',backgroundColor:'#DAECFA'}">
				<img v-for="(item,index) in data.body.items" :src="item.img_url" :style="{position:'absolute',width:item.w/100+'rem',height:item.h/100+'rem',left:item.x?item.x/100+'rem':0}">
				</img>
			</div>
			<div v-if="data.view_type=='list_two_type13'" 
			:src="{backgroundColor:data.body.bg_color} " id='type13'
			>
				<div v-for="item in data.body.items">
					<router-link v-if="item.action.type=='product'" :to="{name:'Detail',params:{id:item.action.path}}">
					<img  :src="item.img_url"></img>
					</router-link>
					<b><p>{{item.product_name}}</p></b>
					<p style="color:grey">{{item.product_brief}}</p>
					<p style="color:red">￥{{item.product_price}}元起</p>
				</div>
			</div>
			<div v-if="data.view_type=='list_action_title'">
				<div v-for="item in data.body.items">
					{{item.action_title}}
				</div>
			</div>
			<div v-if="data.view_type=='list_one_type2'" id="type2">
				<div v-for="item in data.body.items" id="type_item">
					<div class="img_type2">
						<router-link v-if="item.action.type=='product'" :to="{name:'Detail',params:{id:item.action.path}}">
						<img :src="item.img_url">
						</router-link>
					</div>
					<div>
						<b><p>{{item.product_name}}</p></b>
						<p style="color:grey">{{item.product_brief}}</p>
						<p style="color:red">￥{{item.product_price}}元起</p>
					</div>
					
				</div>
			</div>
			<div v-if="data.view_type=='list_one_type3'" id="type3">
				<div v-for="item in data.body.items" id="type_item">
					<div class="img_type3">
						<router-link v-if="item.action.type=='product'" :to="{name:'Detail',params:{id:item.action.path}}">
						<img :src="item.img_url">
						</router-link>
					</div>
					<div>
						<b><p>{{item.product_name}}</p></b>
						<p style="color:grey">{{item.product_brief}}</p>
						<p style="color:red">￥{{item.product_price}}元起</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);
	export default{
		props:["item"],
		data(){
			return{
				datas:[],
				
			}
		},
		created(){
			this.$api.getHomeDataAPI({
				page_type:this.item.page_type,
				page_id:this.item.page_id
			}).then(res=>{
				this.datas=res.data.data.data.sections;
				// console.log(res.data.data.data.sections);
			}).catch(err=>{
				console.log("请求错误");
			})
		}
	}
</script>

<style lang="less"> 
	.hometab{
		.data{
			#type13{
				display: flex;
				img{
					width: 95%;
				}
			}
			#type2{
				display: flex;
				width: 100%;
				#type_item{
					display: flex;
					justify-content: space-between;
					img{
						width: 50%;
					}
				}
				
			}
			#type3{
				display: flex;
				width: 100%;
				#type_item{
					display: flex;
					flex-direction: row-reverse;
					justify-content: space-between;
					img{
						width: 50%;
					}
				}
				
			}
		}
	}
</style>
