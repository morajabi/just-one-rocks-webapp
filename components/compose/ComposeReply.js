import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EditorState, getDefaultKeyBinding } from 'draft-js'

import rem from '../../utils/rem'
import Editor from './Editor'
import { Picture, SendIcon } from '../Icons'

function countChars(text = '') {
  return text.length
}

const minEditorHeight = 38

const Wrapper = styled.div`
  position: relative;
  min-height: ${rem(60)};
  padding: ${rem(11)} 0;
  box-sizing: border-box;

  border-top: 1px solid #ededed;
  background: #fbfbfb;
`

const FlexWrapper = styled.div`
  display: flex;
`

const IconButton = styled.button`
  flex: 0 0 auto;
  width: ${rem(minEditorHeight)};
  line-height: ${rem(minEditorHeight)};
  height: ${rem(minEditorHeight)};
  vertical-align: middle;
  margin-right: ${rem(3)};
  text-align: center;

  border: none;
  background: none;
  padding: 0;
  outline: none;

  &:hover,
  &:focus {
    border-radius: 50%;
    background: #f2f2f2;

    path {
      fill: #333;
    }
  }

  &:active,
  &:focus {
    path {
      fill: blue;
    }
  }
`

const EditorWrapper = styled.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  height: auto;
  box-sizing: border-box;
  font-size: ${rem(14)};
  margin-left: ${rem(13)};
  margin-right: ${rem(2)};

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

const EditorArea = styled.div`
  flex: 1 0 auto;
  min-height: ${rem(minEditorHeight)};
  cursor: text;
  word-wrap: break-word;

  & > [class^="DraftEditor"] {
    /* make editable content full height */
    height: 100%;
  }

  & .public-DraftEditor-content,
  & .public-DraftEditorPlaceholder-root {
    /* make editable content full height */
    padding: ${rem(8)} 0 ${rem(8)} ${rem(15)};
  }
`

const SendButton = styled.button`
  flex: 0 0 auto;
  width: ${rem(minEditorHeight)};
  line-height: ${rem(minEditorHeight)};
  height: ${rem(minEditorHeight)};
  vertical-align: middle;
  margin-right: ${rem(3)};
  text-align: center;

  border: none;
  background: none;
  padding: 0;
  outline: none;

  transition: transform 0.1s;

  &:hover,
  &:focus {
    border-radius: 50%;

    path {
      fill: #333;
    }
  }

  &:active,
  &:focus {
    transform: scale(1.1);

    path {
      fill: darkBlue;
    }
  }
`

/////// META //////

const MetaWrapper = styled.div`
  position: absolute;
  top: ${rem(-23)};
  right: ${rem(0)};
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

class ComposeReply extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    editorState: EditorState.createEmpty(),
    isFocused: true,
  }

  render() {
    const { isFocused, editorState } = this.state
    const { onSubmit } = this.props
    const charCount = 250 - countChars(
      editorState.getCurrentContent().getPlainText()
    )
    const isOffLimit = Math.abs(charCount) !== charCount

    return (
      <Wrapper isFocused={isFocused}>

        <FlexWrapper>
          <EditorWrapper isFocused={isFocused} isOffLimit={isOffLimit}>

            {(isOffLimit || isFocused) &&
              <MetaWrapper>
                <WordCounter isOffLimit={isOffLimit}>
                {isOffLimit && <span>Uh-uh! It's too much </span>}{charCount}
                </WordCounter>
              </MetaWrapper>
            }

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

            <SendButton onClick={onSubmit}>
              <SendIcon />
            </SendButton>
          </EditorWrapper>

          <IconButton>
            <Picture />
          </IconButton>

        </FlexWrapper>
      </Wrapper>
    )
  }

  keyBindingFn = e => {
    if ((e.shiftKey || e.metaKey) && e.keyCode === 13) {
      return 'split-block'
    }
    if (e.keyCode === 13) {
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
}

export default ComposeReply
