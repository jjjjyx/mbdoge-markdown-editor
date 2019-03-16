export default {
    'undo': {
        name: 'undo',
        action: 'undo',
        className: 'fa fa-undo',
        noDisable: true,
        title: 'Undo'
    },
    'redo': {
        name: 'redo',
        action: 'redo',
        className: 'fa fa-repeat fa-redo',
        noDisable: true,
        title: 'Redo'
    },
    'separator-5': {
        name: 'separator-5'
    },
    'bold': {
        name: 'bold',
        action: 'toggleBold',
        className: 'fa fa-bold',
        title: 'Bold',
        default: true
    },
    'italic': {
        name: 'italic',
        action: 'toggleItalic',
        className: 'fa fa-italic',
        title: 'Italic',
        default: true
    },
    'strikethrough': {
        name: 'strikethrough',
        action: 'toggleStrikethrough',
        className: 'fa fa-strikethrough',
        title: 'Strikethrough'
    },
    'heading': {
        name: 'heading',
        action: 'toggleHeadingSmaller',
        className: 'fa fa-header fa-heading',
        title: 'Heading',
        default: true
    },
    'heading-smaller': {
        name: 'heading-smaller',
        action: 'toggleHeadingSmaller',
        className: 'fa fa-header fa-heading header-smaller',
        title: 'Smaller Heading'
    },
    'heading-bigger': {
        name: 'heading-bigger',
        action: 'toggleHeadingBigger',
        className: 'fa fa-header fa-heading header-bigger',
        title: 'Bigger Heading'
    },
    'heading-1': {
        name: 'heading-1',
        action: 'toggleHeading1',
        className: 'fa fa-header fa-heading header-1',
        title: 'Big Heading'
    },
    'heading-2': {
        name: 'heading-2',
        action: 'toggleHeading2',
        className: 'fa fa-header fa-heading header-2',
        title: 'Medium Heading'
    },
    'heading-3': {
        name: 'heading-3',
        action: 'toggleHeading3',
        className: 'fa fa-header fa-heading header-3',
        title: 'Small Heading'
    },
    'separator-1': {
        name: 'separator-1'
    },
    'code': {
        name: 'code',
        action: 'toggleCodeBlock',
        className: 'fa fa-code',
        title: 'Code'
    },
    'quote': {
        name: 'quote',
        action: 'toggleBlockquote',
        className: 'fa fa-quote-left',
        title: 'Quote',
        default: true
    },
    'unordered-list': {
        name: 'unordered-list',
        action: 'toggleUnorderedList',
        className: 'fa fa-list-ul',
        title: 'Generic List',
        default: true
    },
    'ordered-list': {
        name: 'ordered-list',
        action: 'toggleOrderedList',
        className: 'fa fa-list-ol',
        title: 'Numbered List',
        default: true
    },
    'clean-block': {
        name: 'clean-block',
        action: 'cleanBlock',
        className: 'fa fa-eraser',
        title: 'Clean block'
    },
    'separator-2': {
        name: 'separator-2'
    },
    'link': {
        name: 'link',
        action: 'drawLink',
        className: 'fa fa-link',
        title: 'Create Link',
        default: true
    },
    'image': {
        name: 'image',
        action: 'drawImage',
        className: 'fa fa-image',
        title: 'Insert Image',
        default: true
    },
    'table': {
        name: 'table',
        action: 'drawTable',
        className: 'fa fa-table',
        title: 'Insert Table'
    },
    'horizontal-rule': {
        name: 'horizontal-rule',
        action: 'drawHorizontalRule',
        className: 'fa fa-minus',
        title: 'Insert Horizontal Line'
    },
    'separator-3': {
        name: 'separator-3'
    },
    'preview': {
        name: 'preview',
        action: 'togglePreview',
        className: 'fa fa-eye',
        noDisable: true,
        title: 'Toggle Preview',
        default: true
    },
    'side-by-side': {
        name: 'side-by-side',
        action: 'toggleSideBySide',
        className: 'fa fa-columns',
        noDisable: true,
        noMobile: true,
        title: 'Toggle Side by Side',
        default: true
    },
    'fullscreen': {
        name: 'fullscreen',
        action: 'toggleFullScreen',
        className: 'fa fa-arrows-alt',
        noDisable: true,
        noMobile: true,
        title: 'Toggle Fullscreen',
        default: true
    },
    'separator-4': {
        name: 'separator-4'
    },
    'guide': {
        name: 'guide',
        action: 'https://www.markdownguide.org/basic-syntax/',
        className: 'fa fa-question-circle',
        noDisable: true,
        title: 'Markdown Guide',
        default: true
    }
}
