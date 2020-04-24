<template>
  <div id="app">

    <router-view/>
	
	
	<van-tabbar v-model="active" v-show="$route.meta.showtabbar" active-color="#FF7B22" inactive-color="#999">
	   <van-tabbar-item to="/" name="home">
	      <span>首页</span>
	      <template #icon="props">
	        <img :src="props.active ? require('./assets/homesel.png') : require('./assets/home.png')" />
	      </template>
	    </van-tabbar-item>
	  <van-tabbar-item to="/category">
	     <span>分类</span>
	     <template #icon="props">
	       <img :src="props.active ? require('./assets/searchsel.png') : require('./assets/search.png')" />
	     </template>
	   </van-tabbar-item>
	  <van-tabbar-item to="/cart">
	     <span>购物车</span>
	     <template #icon="props">
	       <img :src="props.active ? require('./assets/cartsel.png') : require('./assets/cart.png')" />
	     </template>
	   </van-tabbar-item>
	  <van-tabbar-item to="/mine">
	     <span>我的</span>
	     <template #icon="props">
	       <img :src="props.active ? require('./assets/minesel.png') : require('./assets/mine.png')" />
	     </template>
	   </van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
	export default {
	  data() {
	    return {
	      active: 'home',
	    };
	  },
	};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
