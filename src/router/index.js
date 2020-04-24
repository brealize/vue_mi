import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Category from '../views/Category.vue'
import Detail from '../views/Detail.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import SearchResult from '../views/SearchResult.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta:{
		showtabbar:true
	}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/searchresult',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
	meta:{
		showtabbar:true
	}
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
	
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

import JsCookie from 'js-cookie'


router.beforeEach((t,f,n)=>{
	if(t.meta.auth){
		let logined = JsCookie.get("username")
		if(!logined){
			n("/login?next="+t.path)
		}else{
			n();
			console.log("已经注册")
		}
	}else{
		n();
		console.log("该页面不需要导航守卫")
	}
})


export default router
