export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    {
      prop: 'old_price',
      label: '原价',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    {
      prop: 'new_price',
      label: '折扣价',
      minWidth: '80',
      slotName: 'newPrice'
    },
    {
      prop: 'img_url',
      label: '图片',
      minWidth: '100',
      slotName: 'imgUrl'
    },
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
  showFooter: true
}
