<template>
  <div class="user">
    <el-card class="box-card">
      <pageSearch :searchFormConfig="searchFormConfig"> </pageSearch>
    </el-card>
    <el-card class="box-card"
      ><pageContent
        :contentTableConfig="contentTableConfig"
        pageName="user"
      ></pageContent
    ></el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    const showIndexColumn = true
    const showSelectColumn = true
    return {
      searchFormConfig,
      contentTableConfig,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 12px;
}
</style>
