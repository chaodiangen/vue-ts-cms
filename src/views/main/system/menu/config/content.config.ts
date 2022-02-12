export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'url', label: '菜单路由', minWidth: '100' },
    { prop: 'icon', label: '图标', minWidth: '100', slotName: 'icon' },
    { prop: 'role_type', label: '权限', minWidth: '70', slotName: 'roleType' },
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
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  showFooter: false
}
