import type { Plugin } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export const fontawesome: Plugin = (app) => {
  app.component('FaIcon', FontAwesomeIcon)
}
