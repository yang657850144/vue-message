import Vue from 'vue'
import VueMessage from '~/lib/vue-message' // eslint-disable-line
import App from '@/module/App'

import '@/css/normalize.scss'
import '@/css/reset.scss'

/** 默认配置 */
// Vue.use(VueMessage)

/** advance configuration */
Vue.use(VueMessage, {
  duration: 1,
  themes: 'classic', // classic classicBold
  styles: {
    top: 24, // 单位: px
    fontWeight: 'normal'
  },
  before () {
    console.log('custom before hook')
  },
  done () {
    console.log('custom done hook')
  }
})

function init () {
  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
  })
}

init()
