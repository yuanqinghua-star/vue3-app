<template>
  <div class="home">
    <el-image alt="Vue logo" :src="require('../assets/logo.png')"></el-image>
    <el-image alt="Vue logo" src="../assets/logo.png"></el-image>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button type="primary" @click="getUserInfoAdd">获取用户信息</el-button>
    <svg-icon icon-class="user"></svg-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getUserInfo } from "@/api/user";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup(props, ctx) {
    let getUserInfoAdd = async () => {
      let res = await getUserInfo({});
      console.log(res);
    };
    return {
      getUserInfoAdd,
    };
  },
});
</script>
<style scoped lang="scss">
.svg-icon {
    font-size: 64px;
  }
.content {
  width: 900px;
  height: 200px;
  background: green;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  
  .right {
    background: red;
    border: 1px solid black;
    width: 70px;
    height: 70px;
  }
}
</style> 