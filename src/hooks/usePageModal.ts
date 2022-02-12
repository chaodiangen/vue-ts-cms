import { ref } from 'vue'
import pageModal from '@/components/page-modal'
export function usePageModal() {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof pageModal>>()
  const newBtnClickData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
  }
  const fishBenClickData = () => {
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
  }
  const editBtnClickData = (value: any) => {
    defaultInfo.value = { ...value }
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
  }
  return [
    pageModalRef,
    defaultInfo,
    newBtnClickData,
    fishBenClickData,
    editBtnClickData
  ]
}
