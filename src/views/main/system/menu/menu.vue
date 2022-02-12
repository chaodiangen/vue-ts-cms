<template>
  <div class="user">
    <el-card class="box-card"
      ><pageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="menu"
      >
        <!-- 跨组件插槽 -->
        <template #icon="scope">
          <i style="font-size: 24px" class="iconfont" :class="scope.row.icon">
          </i> </template
        ><template #roleType="scope">
          <el-button type="success" size="small">{{
            scope.row.role_type === 1 ? '一级' : '二级'
          }}</el-button>
        </template></pageContent
      ></el-card
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'hy-menu',
  components: { pageContent },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 12px;
}
</style>
