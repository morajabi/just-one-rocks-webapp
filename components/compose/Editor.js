import React, { PureComponent } from 'react'
import { Editor } from 'draft-js'

class OurEditor extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { innerRef, ...props } = this.props

    return (
      <Editor
        {...props}
        ref={innerRef}
      />
    )
  }
}

export default OurEditor
