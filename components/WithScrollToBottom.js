import { PureComponent } from 'react'

/**
 * Add scroll to end capability
 */
class WithScrollToBottom extends PureComponent {
  constructor(p) {
    super(p)
    this.wrapper = null
    this.isAtTheBottom = false
  }

  render() {
    const { children, ...props } = this.props

    const childrenProps = {
      ownProps: props,
      scrollToBottom: this.scrollToBottom,
      getWrapperProps: this.getWrapperProps,
    }

    return typeof children === 'function' ? children(childrenProps) : null
  }

  getWrapperProps = ({ ref = 'ref' }) => ({
    [ref]: el => this.wrapper = el,
    onScroll: this.wrapperScrolled,
  })

  wrapperScrolled = e => {
    this.isAtTheBottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight
  }

  scrollToBottom = (force = false) => {
    if (!force && !this.isAtTheBottom) {
      return
    }

    if (process.browser && this.wrapper) {
      this.wrapper.scrollTo(0, this.wrapper.scrollHeight)
    }
  }
}

export default WithScrollToBottom
