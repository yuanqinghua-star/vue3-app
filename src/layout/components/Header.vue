<template>
  <header class="header">
    <div class="title">智慧校园选课系统</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand" ref="dropdownRef">
        <span class="el-dropdown-link">
          <el-avatar :size="50" :src="require('@/assets/logo.png')" />
          <span v-show="username" class="email">{{ username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="account"> 账户设置 </el-dropdown-item>
            <el-dropdown-item command="logout"> 退出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let logout = () => {

    }
    let handleCommand = (val: string) => {
      if(val == "account") {

      } else {
        logout()
      }
    };
    let username: string | null = "123123132";
    return {
      handleCommand,
      username
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 2.8rem;
  }
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
    .email {
      margin-left: 0.8rem;
    }
  }
}
</style>