import { useStore } from '@/store'
export function usePermission(pageName: string, handledName: string) {
  const store = useStore()
  const permission = store.state.login.permission
  const verifyPermission = `system:${pageName}:${handledName}`
  return !!permission.find((item) => item === verifyPermission)
}
