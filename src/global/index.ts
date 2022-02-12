import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
import i18n from '@/lang'
export function globalRegister(app: App): void {
  app.use(registerElement, {
    i18n: i18n.global.t
  })
  app.use(registerProperties)
  const files = require.context('.', true, /\.ts$/)
  files.keys().forEach((key) => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app)
    }
  })
}
