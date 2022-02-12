<template>
  <div class="header">
    <div class="left">
      <i
        class="iconfont"
        :class="isFold ? 'icon-zhedie1' : 'icon-zhedie2'"
        @click="handleFold"
      ></i>
    </div>
    <HyBreadcrumb :breadcrumbs="breadcrumbs"></HyBreadcrumb>
    <div class="right">
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import HyBreadcrumb from '@/base-ui/breadcrumb'
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    userInfo,
    HyBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { handleFold, isFold, breadcrumbs }
  }
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  cursor: pointer;
  i {
    font-size: 24px;
  }
}
</style>
