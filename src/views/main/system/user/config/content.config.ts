export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'phone', label: '手机号码', minWidth: '150' },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'status' },
    {
      prop: 'create_time',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'update_time',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    {
      prop: 'role',
      label: '角色',
      minWidth: '100',
      slotName: 'role'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  showFooter: true
}
