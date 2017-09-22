import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  state = {
    isOpen: false
  }

  render() {
    const { children } = this.props
    const { isOpen } = this.state
    const childrenProps = {
      isOpen,
      getNodeProps: this.getNodeProps,
      getTooltipProps: this.getTooltipProps,
    }

    return typeof children === 'function' ? children(childrenProps) : null
  }

  getNodeProps = () => {
    return {
      onMouseOver: this.open,
      onMouseLeave: this.close,
      onFocus: this.open,
      onBlur: this.close,
    }
  }

  getTooltipProps = () => {
    return {
      'aria-hidden': (!this.state.isOpen).toString()
    }
  }

  open = () => {
    this.setState({ isOpen: true })
  }

  close = () => {
    this.setState({ isOpen: false })
  }
}

export default Tooltip
