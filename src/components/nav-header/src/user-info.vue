<template>
  <el-dropdown class="user-info">
    <div class="user-head">
      <div class="img">
        <img :src="userInfo.avatar" alt="" />
      </div>
      <span>{{ userInfo.name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const userInfo = computed(() => store.state.login.userInfo)
    const handleLogout = () => {
      LocalCache.clearCache()
      router.push('/login')
    }
    return {
      userInfo,
      handleLogout
    }
  }
})
</script>

<style lang="less" scoped>
.user-info {
  .user-head {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 12px;
    cursor: pointer;
    .img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 12px;
      img {
        border-radius: 50%;
      }
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
