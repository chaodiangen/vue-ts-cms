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
        @newBtnClick="newBtnClickData"
        @fishBenClick="fishBenClickData"
        @editBtnClick="editBtnClickData"
      >
        <template #status="scope">
          <el-button type="success" size="small">{{
            scope.row.status ? '启用' : '禁用'
          }}</el-button>
        </template></pageContent
      ></el-card
    >
    <pageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    ></pageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { modalConfig } from './config/modal.config'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent, pageModal },
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()
    const [
      pageModalRef,
      defaultInfo,
      newBtnClickData,
      fishBenClickData,
      editBtnClickData
    ] = usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick,
      modalConfig,
      fishBenClickData,
      editBtnClickData,
      newBtnClickData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 12px;
}
</style>
