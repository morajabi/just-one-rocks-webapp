import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import ShareThis from '../components/ShareThis'
import KarmaBox from '../components/KarmaBox'
import Rules from '../components/Rules'
import ReplyBubble from '../components/ReplyBubble'
import Navbar from '../components/Navbar'


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
  .add('Message', () => 
    <div style={{ width: 571 }}>
      <Message 
        styleType="type1"
        userImage=""
        userNicName="Gilfoyle St"
        username="@gilflmx"
        likeCount={50}
        type="con"
        content="Sublime is fast. I mean a lot faster than Electron-based apps like Visual Studio Code from Microsoft."
        wrongCount="-25"
        answerCount="30"
      />
    </div>)
  .add('Message type 2', () => 
    <div style={{ width: 355 }}>
      <Message 
        styleType="type2"
        userNicName="Gilfoyle St"
        type="con"
        content="Sublime is fast. I mean a lot faster than Electron-based apps like Visual Studio Code from Microsoft."
        goBackEvent={action('goBack')}
      />
    </div>
  )
  
storiesOf('ReplyBubble', module)
  .add('RB start', () => 
      <div style={{ width: 355 }}>
        <ReplyBubble 
          align="end"
          content="Hi!"
        />
      </div>
  )
  .add('RB end', () => 
      <div style={{ width: 355 }}>
        <ReplyBubble 
          align="start"
          content="Hi!"
        />
      </div>
  )
  .add('RB style & content', () => 
      <div style={{ width: 355 }}>
        <ReplyBubble 
          align="start"
          bubbleStyle="primary"
          userColor="#0f0"
          content="Hi!"
          upVoteCount="12"
        />
      </div>
  )
  .add('RB with UpVote', () => 
      <div style={{ width: 355 }}>
        <ReplyBubble 
          align="start"
          bubbleStyle="primary"
          userColor="#0f0"
          content="Hi!"
          upVoteCount={12}
          onUpVote={ action('Upvote')}
        />
      </div>
  )
  .add('RB with multiline', () => 
      <div style={{ width: 355 }}>
        <ReplyBubble 
          align="start"
          bubbleStyle="primary"
          userColor="#0f0"
          content="Hi h s lkasdjlk asjdkla jskdsaj dlkdkladlklkas asdjaks jkldsaj klasas dashkjdasj dlkajsl kdjasld!"
          upVoteCount={12}
          onUpVote={ action('clicked') }
        />
      </div>
  )


  storiesOf('Nav bar', module)
    .add('RB start', () => 
      <div style={{ width: 1200, background: '#eee'}}>
        <Navbar />
      </div>
    )
