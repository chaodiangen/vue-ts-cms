<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="header-handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="50"
        align="center"
      />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        width="50"
        label="序号"
        align="center"
      />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          :show-overflow-tooltip="true"
          v-bind="propItem"
          align="center"
        >
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          hide-on-single-page
          :page-sizes="[10, 20]"
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 10
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: () => false
    }
  },
  emits: ['selectChange', 'update:page'],

  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectChange', value)
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  .title {
    font-size: 18px;
    font-weight: 600;
  }
}
.footer {
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: right;
}
</style>
