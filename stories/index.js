import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import ShareThis from '../components/ShareThis'
import KarmaBox from '../components/KarmaBox'
import Rules from '../components/Rules'
import ReplyBubble from '../components/ReplyBubble'


import FilterBar from '../components/FilterBar'
import Message from '../components/Message'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('SideBar', module)
  .add('ShareThis', () => <div style={{ width: 262 }}><ShareThis /></div>)
  .add('KarmaBox', () => <div style={{ width: 232 }}><KarmaBox /></div>)
  .add('Rules', () => <div style={{ width: 242 }}><Rules /></div>)

storiesOf('Header', module)
  .add('FilterBar', () => <div style={{ width: 571 }}><FilterBar /></div>)
  
storiesOf('Message', module)
  .add('Message', () => <div style={{ width: 571 }}><Message /></div>)
  
storiesOf('Chat', module)
  .add('ReplyBubble', () => 
      <div style={{ width: 355 }}>
        <ReplyBubble 
        userPicture=""
        />
      </div>
    )
