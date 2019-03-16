import MbdogeEditor from './mbdoge-editor'
import './assets/scss/index.scss'

export default {
    // 渲染组建
    install (Vue, options = {}) {
        let autoDownloadFA = true
        if (options.autoDownloadFontAwesome === false) {
            autoDownloadFA = false
        }

        if (options.autoDownloadFontAwesome !== true) {
            let styleSheets = document.styleSheets
            for (let i = 0; i < styleSheets.length; i++) {
                if (!styleSheets[i].href) {
                    continue
                }

                if (styleSheets[i].href.indexOf('//use.fontawesome.com') > -1) {
                    autoDownloadFA = false
                }
            }
        }

        if (autoDownloadFA) {
            let fontawesomeHref = options.fontawesomeHref || 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
            let link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = fontawesomeHref
            document.getElementsByTagName('head')[0].appendChild(link)
            console.debug('auto load fontawesome')
        }

        Vue.prototype.$MBDOGE = {
            toolbarSize: options.toolbarSize || '',
            zIndex: options.zIndex || 100 // 用于在全屏时防止被用户已有的元素遮挡
        }

        Vue.component(MbdogeEditor.name, MbdogeEditor)
    }
}
