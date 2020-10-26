<template>
  <div class="home">
	  <!-- <button @click="changeStatus">点击</button> -->
	  <!-- <div class="animate__animated animate__bounce" v-if="status">安好了的就是浪费时间的</div> -->
	  <!-- icon -->
	  <h5>icon</h5>
	  <div class="iconfont icon-xinxi"></div>
	  <my-icon id="icon-wangluo" color="text-warning" size="88"></my-icon>
	  <!-- boostrap4 -->
	  <div class="container">
	    <div class="row">
	      <div class="col  border border-success">
	        One of three columns
	      </div>
	      <div class="col border border-success">
	        One of three columns
	      </div>
	      <div class="col border border-success">
	        One of three columns
	      </div>
	    </div>
		<div class="row">
		  <div class="col-md-4  border border-success">
		    One of three columns
		  </div>
		  <div class="col-md-4 border border-success">
		    One of three columns
		  </div>
		  <div class="col-md-4 col-lg-6 border border-success">
		    One of three columns
		  </div>
		</div>
	  </div>
	  
  </div>
</template>

<script>
import {ref} from 'vue'
const status = ref(true)
const changeStatus = () => status.value = !status.value

export default {
  name: 'home',
  components: {},
  setup() {
	  return {
		  status,
		  changeStatus
	  }
  }
}
</script>
