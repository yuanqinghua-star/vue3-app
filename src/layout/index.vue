<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import LeftMenu from "@/layout/components/Menu.vue";
import Header from "@/layout/components/Header.vue";
import Footer from "@/layout/components/Footer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: { LeftMenu, Header, Footer },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
  .el-container.is-vertical {
    height: 100%;
    .el-container {
      height: calc(100% - 60px);
      .el-container.is-vertical {
        height: 100%;
      }
    }
  }
}
</style>