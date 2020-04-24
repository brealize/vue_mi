<template>
	<div class="login">
		<div class="top">
			<img src="../assets/img/milogo.png">
			<p>小米账号登录</p>	
		</div>
		<div class="info" v-if="type==1">
		<van-field v-model="tel" type="tel" label="+86" placeholder="手机号" />
		<van-field
		  v-model="sms"
		  center
		  clearable
		  label="短信验证码"
		  placeholder="请输入短信验证码"
		>
		  <template #button>
		    <van-button size="small" type="primary" @click="sendsms">发送验证码</van-button>
		  </template>
		</van-field>
			<van-button type="danger" color="#FF6700" size="large" @click="login(1)">立即登录/注册</van-button>
			<van-button type="default" size="large" id="pwd" @click="changeType(2)">用户名密码登录</van-button>
			<router-link to="/help"> 收不到验证码 </router-link>
		</div>
		<div class="info" v-if="type==2">
		<van-field v-model="tel" type="tel"  placeholder="邮箱/手机号码/小米Id" />
		<van-field v-model="password" type="password" placeholder="密码" />
		<van-button type="danger" color="#FF6700" size="large" @click="login(2)">立即登录/注册</van-button>
		<van-button type="default" size="large" id="pwd" @click="changeType(1)" >手机短信登录/注册</van-button>
		<router-link to="/regist">注册</router-link>|<router-link to="/login">登录</router-link>
		</div>
		<div class="otherType">
			<van-divider>其他方式登录</van-divider>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				tel:'',
				sms:"",
				type:1,
				password:""
			}
		},
		methods:{
			changeType(type){
				this.type = type;
			},
			login(type){
				if(type==1){
					this.$api.loginAPI({
						fmdo:"telphone",
						dopost:"login",
						telephone:this.tel,
						sms:this.sms
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set("username",this.tel,{expires:7})
							let next = this.$route.query.next;
							if(next){
								this.$router.push(next)
							}else{
								this.$router.push('/')
							}
						}
					}).catch(err=>{
						console.log("登陆失败",err)
					})
				}
				else if(type==2){
					this.$api.loginAPI({
						fmdo:"normal",
						dopost:"login",
						userid:this.username,
						pwd:this.password
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set("username",this.username,{expires:7})
							let next = this.$route.query.next;
							if(next){
								this.$route.push(next)
							}else{
								this.$route.push('/');
							}
						}
					}).catch(err=>{
						console.log("登录失败",err)
					})
				}
			},
			sendsms(){
				if(this.tel.length<=0){
					this.$toast("需要输入手机号")
				}else{
					this.$api.sendsmsAPI({
						tel:this.tel,
						type:"regist"
					}).then(res=>{
						if(res.data.code==0){
							this.$toast("验证码已发出")
						}
					}).catch(err=>{
						console.log("错误",err)
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.login{
		padding:0 .4rem;
		.top{
			margin-top: 0.72rem;
			p{
				font-size: .36rem;
			}
		}
		.info{
			#pwd{
				margin-top: .48rem;
			}
			#que{
				color:grey;
				padding-top: .4rem;
			}
		}
	}
</style>
