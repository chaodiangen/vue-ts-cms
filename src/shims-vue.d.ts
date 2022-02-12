/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.gif' {
  export const gif: any
}

declare let $store: any
declare const VUE_APP_BASE_URL: string
declare const VUE_APP_BASE_NAME: string
// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to'
// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'
declare module 'js-cookie'
