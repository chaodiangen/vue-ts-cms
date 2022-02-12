import hyRequest from '../../index'
import { IDataType } from '../../typed'

export function getPageListData(url: string, payload: any) {
  return hyRequest.post<IDataType>({
    url,
    data: payload
  })
}
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url
  })
}
