import React, { PureComponent } from 'react'
import { Editor, convertFromRaw } from 'draft-js'

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

export const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
    },
  ],
})
