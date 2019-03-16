import toolbarBuiltInButtons from './toolbarBuiltInButtons'

export default {
    functional: true,
    name: 'doge-functional-btn',
    props: {
        item: {
            type: [String, Object],
            required: true
        }
    },
    render (h, ctx) {
        let item = ctx.props.item
        if (typeof item === 'string') {
            if (item === '|') {
                return <i class="doge-toolbar__separator"/>
            }
            let tmp = toolbarBuiltInButtons[item]
            // 指定了字符串，并且是无效的命令
            if (!tmp) {
                console.debug('无效的工具栏按钮 = ', item)
                return null
            }
            item = tmp
        }
        // 看有没有需求吧，可以加 render 函数更加高度的自定义图标
        if (toString.call(item) !== '[object Object]') {
            console.debug('无效的工具栏按钮 = ', JSON.stringify(item))
            return null
        }

        let { name, action, className, title, noDisable } = item
        let actionFn = () => {}
        if (typeof action === 'function') {
            actionFn = action
        } else if (typeof action === 'string') { // 字符串是明亮
            let tmp = ctx.parent[action]
            if (tmp && typeof tmp === 'function') {
                actionFn = tmp
            } else {
                // 其他字符串 忽略
            }
        }

        let bc = [
            'doge-toolbar__btn',
            `doge-toolbar__btn--${name}`,
            {
                'doge-toolbar__btn--no-disable': noDisable
            }
        ]

        // todo 点击事件需要传递一些参数
        return <button title={title} class={bc} type="button" tabIndex="-1" onClick={actionFn}>
            <i class={className}/>
        </button>
    }
}
