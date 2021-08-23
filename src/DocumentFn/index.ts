let hidden
const _document = document as any

if (typeof _document.hidden !== 'undefined') {
  hidden = 'hidden'
} else if (typeof _document?.mozHidden !== 'undefined') {
  hidden = 'mozHidden'
} else if (typeof _document?.msHidden !== 'undefined') {
  hidden = 'msHidden'
} else if (typeof _document?.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden'
}

/**
 * 检查当前标签是否隐藏
 * @returns boolean
 */
const isBrowserTabInView = (): boolean => document.hidden

export default {
  isBrowserTabInView,
}
