<template>
  <hy-form v-bind="searchFormConfig" v-model="formData">
    <template #footer>
      <el-button size="small" @click="handleQuery"
        ><i class="iconfont icon-sousuotianchong"></i> 搜素</el-button
      >
      <el-button size="small" type="primary" @click="handleResetClick"
        ><i class="iconfont icon-zhongzhi"></i>重置</el-button
      >
    </template>
  </hy-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
export default defineComponent({
  components: {
    HyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}

    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      // formData.value = formOriginData
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }
    const handleQuery = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQuery
    }
  }
})
</script>

<style lang="scss" scoped></style>
