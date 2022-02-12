<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
export default defineComponent({
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
}
</style>
