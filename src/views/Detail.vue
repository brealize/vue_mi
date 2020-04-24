<template>
	<div class="detail" v-if="data">
		<div class="gallery">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="(item,index)  in selectGood.gallery_v3" :key='index'>
						<img v-lazy="item.img_url" style="width:7.2rem;"/>
					</van-swipe-item>
			</van-swipe>
		</div>
		<div class="info">
			<span style="font-size: .4rem;float: left;">{{data.product_info.name}}</span>
			<br>
			<p v-html="data.product_info.product_desc" style="text-align: left;font-size: 0.2rem;"></p>
			<p style="color: #ff6700;font-size: .48rem;text-align: left;">￥{{selectGood.price}}</p>
			<div class="params">
				<div class="param" v-for="(pam,index) in selectGood.class_parameters.list" v-if="pam.icon">
					<img :src="pam.icon" alt="">
					<p>{{pam.name}}</p>
					<p>{{pam.value}}</p>
				</div>
			</div>
		</div>

		<div class="sku-container">
		        <van-sku
		          v-model="showBase"
		          :sku="skuData.sku"
		          :goods="skuData.goods_info"
		          :goods-id="skuData.goods_id"
		          :hide-stock="skuData.sku.hide_stock"
		          :quota="skuData.quota"
		          :quota-used="skuData.quota_used"
		          :initial-sku="initialSku"      
		          reset-stepper-on-hide
		          reset-selected-sku-on-hide
		          disable-stepper-input
		          :close-on-click-overlay="closeOnClickOverlay" 
		          :custom-sku-validator="customSkuValidator"  
		          @buy-clicked="onBuyClicked"
		          @add-cart="onAddCartClicked"
		        />
				<van-cell-group>
					  <van-cell  @click="showBase = true" title="已选" :value="selectGood.name" is-link />
				</van-cell-group>
		        <!-- <van-button
		          block
		          type="primary"
		          @click="showBase = true"
		        >
		          xxxx
		        </van-button> -->
		      </div> 
			  
			  
			  <van-goods-action>
			    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
			    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
			    <van-goods-action-button
			      type="warning"
			      text="加入购物车"
			      @click="onClickButton"
			    />
			    <van-goods-action-button
			      type="danger"
			      text="立即购买"
			      @click="onClickButton"
			    />
			  </van-goods-action>
		<div style="height: 50px;"> </div>
	</div>
</template>

<style lang="less">
	.detail{
		.info{
			padding: 0.16rem;
			.params{
				display: flex;
				overflow-x: scroll;
				.param{
					min-width: 1.68rem;
					padding: 0.08rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #676767;
				}
			}
		}
	}
	
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Toast } from 'vant';
import skuData from '../data/data.js';
export default {
  components: {
	  
  },
  data(){
	  return{
		 data:null,
		 selectGood:null,
		  skuData:skuData,
		       showBase: true,
		       showCustom: false,
		       showStepper: false,
		       showSoldout: false,
		       closeOnClickOverlay: true,
		       initialSku: {
		         s1: '30349',
		         s2: '1193',
		         selectedNum: 3
		       },
		       customSkuValidator: () => '请选择xxx!', 
		     };
	  
  },
   methods: {
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton(good) {
        this.$store.commit("addGood",{
			goodid:this.data.product_info.produce_id,
			skuid:this.selectGood.good_id, 
			name:this.selectGood.name,
			price:this.selectGood.price,
			desc:this.selectGood.product_desc,
			image:this.selectGood.img_url,
			num:1
		})
      },
	  select(){
	  		 this.show=true
	  	 },
		 onBuyClicked(data) {
		      this.$toast('buy:' + JSON.stringify(data));
		      console.log(JSON.stringify(data))
		    },
		
		    onAddCartClicked(data) {
		      this.$toast('add cart:' + JSON.stringify(data));
		    }, 
	 onClickHome(){
		 this.$router.push("/")
		},
	 onClickCart(){
	  this.$router.push("/cart")
		},
		onClickService(){
			   this.$toast('点击客服');
		}
    },
  created(){
	  this.$api.getProductDataAPI({
		  id:this.$route.params.id
	  }).then(res=>{
		  console.log(res.data.data);
		  this.data = res.data.data
		  this.selectGood = this.data.goods_info[0]
	  }).catch(err=>{
		  console.log("请求失败")
	  })
  }
  
}
</script>
