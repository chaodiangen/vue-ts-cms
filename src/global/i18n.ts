/*
 * @Description: i18nå½éå
 * @Author: ZY
 * @Date: 2020-12-19 11:53:48
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 10:08:34
 */
import i18n from '@/lang'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function loadComponent(app: any) {
  app.use(i18n)
}
