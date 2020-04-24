<template>
	<div class="cart" >
		<van-card v-for="(good,index) in $store.getters.getGoodList" :key="index"
		  num="good.num"
		  price="good.price"
		  desc="good.desc"
		  title="good.name"
		  thumb="good.img"
		>
		  <template #footer>
		    <van-button size="mini" @click="changeNum(good.goodid,good.skuid,good.num+1)">+</van-button>
		    <van-button size="mini" @click="changeNum(good.goodid,good.skuid,good.num+1)">-</van-button>
		    <van-button size="mini" @click="remove(good.goodid,good.skuid)">移除</van-button>
		  </template>
		</van-card> 
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
	  
  },
  methods:{
	  changeNum(goodid,skuid,num){
		  this.$store.dispatch("changeNumAsync",{
			  id:goodid,
			  skuid:skuid,
			  num:num
		  }).then(()=>{
			  this.$toast("修改数量成功")
		  })
	  },
	  remove(goodid,skuid){
		  this.$store.dispatch("removeAsync",{
			  id:goodid,
			  skuid:skuid
		  }).then(()=>{
			  this.$toast("移除成功")
		  })
	  }
  }
}
</script>
