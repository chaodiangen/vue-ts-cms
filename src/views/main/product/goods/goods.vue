<template>
  <div class="user">
    <el-card class="box-card">
      <pageSearch
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="resetBtnClick"
        @queryBtnClick="queryBtnClick"
      >
      </pageSearch>
    </el-card>
    <el-card class="box-card"
      ><pageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="user"
      >
        <template #status="scope">
          <el-button type="success" size="small">{{
            scope.row.status ? '启用' : '禁用'
          }}</el-button> </template
        ><template #imgUrl="scope">
          <el-image
            style="width: 90px; height: 90px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
          >
          </el-image></template></pageContent
    ></el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
export default defineComponent({
  name: 'goods',
  components: { pageSearch, pageContent },
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick
    }
  }
})
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 12px;
}
</style>
