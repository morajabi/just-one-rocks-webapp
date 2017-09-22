import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { EditorState, getDefaultKeyBinding } from 'draft-js'

import rem from '../../utils/rem'
import Editor from './Editor'

function countChars(text = '') {
  return text.length
}

const minEditorHeight = 38

const Wrapper = styled.div`
  position: relative;
  min-height: ${rem(60)};
  padding: ${rem(11)} ${rem(13)};
  box-sizing: border-box;

  border-top: 1px solid #ededed;
  background: #fbfbfb;
`

const EditorWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: ${rem(14)};

  border: none;
  box-shadow: inset 0 0 0 ${p =>
    p.isOffLimit ? '2px red' :
    p.isFocused ? '2px #ccc' : '1px #eee'};
  border-radius: 18px;
  background: #fefefe;
  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: inset 0 0 0 2px ${p => p.isOffLimit ? 'darkRed' : '#ccc' };
  }
`


const EditorFlexWrapper = styled.div`
  display: flex;
  height: auto;
`

const EditorArea = styled.div`
  flex: 0 1 100%;
  min-height: ${rem(minEditorHeight)};
  cursor: text;

  & > [class^="DraftEditor"] {
    /* make editable content full height */
    height: 100%;
  }

  & .public-DraftEditor-content,
  & .public-DraftEditorPlaceholder-root {
    /* make editable content full height */
    padding: ${rem(8)} 0;
  }
`

// As a flex wrapper
const TypeSwitch = styled.div`
  flex: 0 0 auto;
  padding: 0 ${rem(7)};
  vertical-align: middle;
`

const TypeOption = styled.div`
  display: inline-block;
  padding: 0 ${rem(10)};
  height: ${rem(minEditorHeight)};
  line-height: ${rem(minEditorHeight)};
  font-weight: bold;
  letter-spacing: ${rem(0.5)};
  text-transform: uppercase;
  cursor: pointer;

  ${p => p.active ? css`
    /* active */
    color: ${p.color};
    text-decoration: underline;
  ` : css`
    color: #e9e9e9;

    &:hover {
      color: #ccc;
    }
  `}
`

const TypeSeparator = styled.div`
  display: inline-block;
  color: rgba(0, 0, 0, 0.1);

  &:before {
    content: '/';
  }
`

const MetaWrapper = styled.div`
  position: absolute;
  top: ${rem(-14)};
  right: ${rem(15)};
  width: 100%;
  text-align: right;
  padding: 0 ${rem(12)} ${rem(1)} 0;
`

const WordCounter = styled.div`
  display: inline-block;
  width: auto;
  margin-left: ${rem(17)};
  padding: 0 ${rem(5)};
  font-size: ${rem(14)};
  line-height: 1.1;
  letter-spacing: ${rem(1)};
  color: ${p => p.isOffLimit ? 'red' : 'rgb(200, 200, 200)'};
  background: #fff;
  border-radius: ${rem(5)};
  border: 1px solid #eee;

  span {
    opacity: 0.5;
  }
`

class ComposeMessage extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    editorState: EditorState.createEmpty(),
    isFocused: true,
    type: 'pro',
  }

  render() {
    const { isFocused, type, editorState } = this.state
    const charCount = 250 - countChars(
      editorState.getCurrentContent().getPlainText()
    )
    const isOffLimit = Math.abs(charCount) !== charCount

    return (
      <Wrapper isFocused={isFocused}>

        {(isOffLimit || isFocused) &&
          <MetaWrapper>
            <WordCounter isOffLimit={isOffLimit}>
            {isOffLimit && <span>Uh-uh! It's too much </span>}{charCount}
            </WordCounter>
          </MetaWrapper>
        }

        <EditorWrapper isFocused={isFocused} isOffLimit={isOffLimit}>
          <EditorFlexWrapper isFocused={isFocused}>
            <TypeSwitch>
              <TypeOption
                active={type === 'pro'}
                color="#38F479"
                onClick={() => this.switchType('pro')}
              >
                pro
              </TypeOption>
              <TypeSeparator />
              <TypeOption
                active={type === 'con'}
                color="#FF9B2F"
                onClick={() => this.switchType('con')}
              >
                con
              </TypeOption>
            </TypeSwitch>

            <EditorArea isFocused={isFocused} isOffLimit={isOffLimit}>
              <Editor
                placeholder="What do you think?"
                editorState={editorState}
                innerRef={editor => this.editor = editor}
                onChange={this.changed}
                onFocus={this.focused}
                onBlur={this.blured}
                keyBindingFn={this.keyBindingFn}
                handleKeyCommand={this.handleKeyCommand}
              />
            </EditorArea>
          </EditorFlexWrapper>
        </EditorWrapper>
      </Wrapper>
    )
  }

  keyBindingFn = e => {
    if ((e.shiftKey || e.metaKey) && e.keyCode === 13) {
      return 'submit'
    }
    return getDefaultKeyBinding(e)
  }

  handleKeyCommand = command => {
    if (command === 'submit') {
      this.props.onSubmit()
      return 'handled'
    }
    return 'not-handled'
  }

  changed = editorState => this.setState({ editorState })

  focused = () => {
    this.setState({ isFocused: true })
  }

  blured = () => {
    this.setState({ isFocused: false })
  }

  switchType(type) {
    if (this.editor) {
      this.editor.focus()
    }
    this.setState({ type })
  }
}

export default ComposeMessage
