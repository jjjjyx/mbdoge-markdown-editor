<template>
    <div :class="wrapperClasses" :style="wrapperStyles">
        <div :class="toolbarClasses">
            <!--<template v-for="btn in toolbar">-->
            <!---->
            <!--</template>-->
            <doge-functional-btn v-for="(item, index) in toolbar" :item="item" :key="index"></doge-functional-btn>
        </div>
        <div class="doge-editor-con" contenteditable="true" v-html="source"></div>
        <div class="doge-statusbar"></div>
    </div>
</template>

<script>
// import './assets/scss/index.scss'

import DogeFunctionalBtn from '@/components/doge-functional-btn'

const defaultToolbar = [
    // 'undo',
    // 'redo',
    // '|',
    'bold',
    'italic',
    'strikethrough',
    'heading',
    '|',
    'code',
    'quote',
    'unordered-list',
    'ordered-list',
    '|',
    'link',
    'image',
    '|',
    'preview',
    'side-by-side',
    'fullscreen',
    'guide'
]

const prefix = 'doge'

export default {
    name: 'mbdoge-editor',
    components: { DogeFunctionalBtn },
    data () {
        return {
            content: ''
        }
    },
    computed: {
        toolbarClasses () {
            let size = this.toolbarSize
            return [
                `${prefix}-toolbar`,
                `${prefix}-toolbar--${size}`
            ]
        },
        wrapperClasses () {
            return [
                `${prefix}-wrapper`
            ]
        },
        wrapperStyles () {
            let height = this.height
            if (height === 'auto') {
                height = '100%'
            } else if (height <= 100) {
                height = `${height}%`
            } else {
                height = `${height}px`
            }
            return { height }
        }
    },
    props: {
        source: {
            type: String
        },
        toolbar: {
            type: Array,
            default: () => defaultToolbar
        },
        // 需要隐藏的工具栏按钮
        hideIcons: {
            type: Array,
            default: () => []
        },
        status: {
            type: Array,
            default: () => ['autosave', 'lines', 'words', 'cursor']
        },
        toolbarSize: {
            type: String,
            default: 'normal',
            validator (v) {
                return ['normal', 'small', 'large'].indexOf(v) !== -1
            }
        },
        height: {
            type: [Number, String],
            default: 350
        }
    },
    created () {
        console.debug('created mbdoge editor')
    },
    mounted () {
        // let editHeight = this.height
        // if (editHeight === 'auto') {
        //     // 获取元素的父元素 填充高度
        //     let parentEl = this.$el.parentNode
        //     console.log()
        // }
    },
    methods: {
        undo () {
            console.debug('exec undo')
        }
    }
}
</script>
