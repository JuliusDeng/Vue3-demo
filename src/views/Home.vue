<template>
  <div class="home">
    <div class="wrapper">
      <slide-bar iconId="icon-wangluo" icon-color="text-warning" icon-size="45">
		  Welcome to here
	  </slide-bar>
	  
      <div class="w-100">
		  <content-head>
		  		  <template #title>HellO, 黎</template>
		  		  <template #des>world</template>
		  		  <template #calc>用心去做，此时无他~</template>
		  </content-head>
		  <router-view></router-view>
	  </div>
	  
	  <!-- <user-profile :src='require("../assets/img/wr-user.jpg")'></user-profile> -->
	  <user-profile :src='src'></user-profile>
	  
    </div>
  </div>
</template>

<script>
import slideBar from '@/components/slide-bar/slide-bar.vue'	
import contentHead from '@/components/content-head/content-head.vue'	
import userProfile from '@/components/user-profile/user-profile.vue'	
	
export default {
  name: 'home',
  components: {
	  slideBar,
	  contentHead,
	  userProfile
  },
  setup() {
	  return {
		  src: require("../assets/img/wr-user.jpg")
	  }
  }
}
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
}

.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
   /* 使水平居中 */
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}

.user-profile {
  min-width: 350px;
  height: 90vh;
}

.network {
  width: 4vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  width: 4vw;
  height: 80vh;
  font-size: 30px;
  color: rgb(255, 191, 121);
  background-color: rgba(52, 57, 92, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
}

.content-head {
  width: 100%;
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content-head > div {
  display: flex;
}

.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}
</style>
