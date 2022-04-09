<template>
  <div class="parent">
    <el-row class="parent-container">
      <el-col :span="12">
        <img src="@/assets/login.png" alt="1" />
      </el-col>
      <el-col :span="12">
        <el-form>
          <slot />
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f0f0f0;
  .parent-container {
    width: 960px;
    max-height: 510px;
    background-color: #ffffff;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    /deep/ .el-form {
      padding: 50px 60px 0;
      font-size: 16px;
      .type-in-title {
        margin: 0 0 30px;
        font-size: 18px;
        color: #6c757d;
        text-align: left;
      }
      .el-form-item {
        margin: 0 0 12px;
        .el-input {
          .el-input__inner {
            border: none;
            background-color: #f9f9fb;
            color: #98a6ad;
            font-size: 16px;
            height: 50px;
            caret-color: #98a6ad;
          }
        }
      }
      .el-form-item__content {
        font-size: 16px;
      }
    }
  }
}
</style>