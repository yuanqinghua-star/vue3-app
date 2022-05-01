<template>
  <div class="home" @mousemove="handleMouseMove">
    <el-image alt="Vue logo" :src="require('../assets/logo.png')"></el-image>
    <el-image alt="Vue logo" src="../assets/logo.png"></el-image>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button type="primary" @click="getUserInfoAdd">获取用户信息</el-button>
    <svg-icon icon-class="user"></svg-icon>
    <div class="content">
      <div class="left"></div>
      <div class="right"></div>
      <div class="right sticky"></div>
      <div class="right"></div>
      <div class="right"></div>
      <div class="right"></div>
      <div class="right"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from 'vuex'
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
    function throttle(fn: Function, threshhold = 200) {
      let timeout:any = null;
      // 计算开始时间
      let start = new Date().getTime();
      return function(this: void) {
        // 触发时间
        const current = new Date().getTime() - 0;
        timeout && clearTimeout(timeout);
        // 如果到了时间间隔点，就执行一次回调
        if (current - start >= threshhold) {
          fn.call(this, ...arguments);
          // 更新开始时间
          start = current;
        } else {
          // 保证方法在脱离事件以后还会执行一次
          timeout = setTimeout(fn.bind(this), threshhold, ...arguments);
        }
      };
    }
    setTimeout(() => {
      
    }, 2000, ...arguments)

    let handleMouseMove = throttle(function (e: MouseEvent) {
      console.log(e.pageX, e.pageY);
    }, 1000);

    // 绑定监听
    return {
      getUserInfoAdd,
      handleMouseMove
    };
  },
});
</script>
<style scoped lang="scss">
.svg-icon {
  font-size: 64px;
}
.content {
  height: 400px;
  width: 100%;
  background: red;
  overflow: auto;
  .left {
    height: 100px;
    width: 270px;
    background: greenyellow;
  }
  .right {
    background: blue;
    height: 100px;
    width: 270px;
    overflow: hidden;
    position: relative;
    &.sticky {
      position: sticky;
      background: yellow;
      top: 50px;
      z-index: 200;
    }
  }
}
</style> 