<template>
  <HyTable
    :listData="dataList"
    :listCount="dataCount"
    v-bind="contentTableConfig"
    v-model:page="pageInfo"
    @selectChange="selectChange"
  >
    <template #createAt="scope">
      {{ $filters.formatTime(scope.row.create_time) }}
    </template>
    <template #updateAt="scope">
      {{ $filters.formatTime(scope.row.update_time) }}
    </template>
    <template #role="scope">
      <el-tag class="ml-2" type="success">{{ scope.row.status }}</el-tag>
    </template>
    <template #handle="scope">
      <div class="handle-b">
        <el-button @click="handleEditClick(scope.row)" size="small" type="text"
          ><i class="iconfont icon-shouhuodizhiyebianji"></i> 编辑</el-button
        >
        <el-button
          @click="handleDeleteClick(scope.row)"
          size="small"
          type="text"
          ><i class="iconfont icon-changyonggoupiaorenshanchu"></i>
          删除</el-button
        >
      </div>
    </template>
    <template #headerHandle>
      <el-button @click="handleNewClick" type="primary" size="small"
        >创建用户</el-button
      >
      <el-button @click="candlefishClick" size="small"
        ><i class="iconfont icon-zhongzhi"></i
      ></el-button>
    </template>
    <template
      v-for="item in otherPropSlots"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </template>
  </HyTable>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import HyTable from '@/base-ui/table'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    },
    showIndexColumn: {
      type: Boolean
    }
  },
  components: { HyTable },
  setup(props, { emit }) {
    const store = useStore()
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          pageNumber: pageInfo.value.currentPage,
          pageSize: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    const dataList = computed(() =>
      store.getters[`system/pageListDate`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    //  获取插槽
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'create_time') return false
        if (item.slotName === 'update_time') return false
        if (item.slotName === 'headerHandle') return false
        if (item.slotName === 'handle') return false
        return true
      }
    )
    const selectChange = (item: any) => {}
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const candlefishClick = () => {
      emit('fishBenClick')
    }
    const handleDeleteClick = (item: any) => {}
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      dataCount,
      selectChange,
      candlefishClick,
      handleNewClick,
      handleDeleteClick,
      handleEditClick,
      getPageData,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery
    }
  },
  emits: ['newBtnClick', 'fishBenClick', 'editBtnClick']
})
</script>
<style lang="less" scoped>
.handle-b {
  display: flex;
  align-items: center;
}
</style>
