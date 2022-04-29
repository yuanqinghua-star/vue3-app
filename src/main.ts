import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "@/styles/index.scss";

import {
  ElContainer,
  ElHeader,
  ElFooter,
  ElAside,
  ElButton,
  ElImage,
  ElCard,
  ElDropdown,
  ElInput,
  ElAvatar,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElMessage
} from "element-plus";
import "element-plus/dist/index.css";

import '@/icons'  // 导入图标资源
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component


let app = createApp(App);
app
  .component('svg-icon', SvgIcon)
app
  .use(ElContainer)
  .use(ElHeader)
  .use(ElFooter)
  .use(ElAside)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElRow)
  .use(ElCol)
  .use(ElButton)
  .use(ElImage)
  .use(ElCard)
  .use(ElDropdown)
  .use(ElAvatar)
  .use(ElInput)
  .use(ElMessage);

app.use(store).use(VueAxios, axios).use(router).mount("#app");
