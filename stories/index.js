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
import AnswersFor from '../components/AnswersFor'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'

import FilterBar from '../components/FilterBar'
import Message from '../components/Message'
import ComposeMessage from '../components/compose/ComposeMessage'
import ComposeReply from '../components/compose/ComposeReply'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('SideBar', module)
  .add('ShareThis', () => <div style={{ width: 262 }}>
      <ShareThis
        onTwitterClick={action('twisiter')}
        onFacebookClick={action('facsebook')}
      />
    </div>
  )
  .add('KarmaBox', () =>
    <div style={{ width: 232 }}>
      <KarmaBox
        title="Yes! You have"
        scoreCount={18}
        onShareClick={action('ShareLink')}
      />
    </div>
  )
  .add('Rules', () => <div style={{ width: 242 }}><Rules /></div>)

storiesOf('Header', module)
  .add('FilterBar', () =>
  <div style={{ width: 571 }}>
    <FilterBar
      onMostRecentClick={action('a1')}
      onMostPopularClick={action('a2')}
      onProsClick={action('a3')}
      onConsClick={action('a4')}
    />
  </div>)

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
  .add('Message type with buttons', () =>
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
        goBackEvent={action('goBack')}
        onLikeClick={action('onLikeClick')}
        onUserClick={action('onUserClick')}
        onWrongClick={action('onWrongClick')}
        onAnswerClick={action('onAnswerClick')}
      />
    </div>
  )
  .add('Message with answers highlight', () =>
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
        goBackEvent={action('goBack')}
        onLikeClick={action('onLikeClick')}
        onUserClick={action('onUserClick')}
        onWrongClick={action('onWrongClick')}
        onAnswerClick={action('onAnswerClick')}
        answerHighlightArray={[
          {
            UpVoteCount: 10,
            answerUsername: 'Gavin Belson',
            answerContent: 'Why are you telling Redux is faster? It’s obviously wrong.',
            onUpVoteClick: action('onUpVoteClick'),
          },
          {
            UpVoteCount: 10,
            answerUsername: 'Gavin Belson',
            answerContent: 'Why are you telling Redux is faster? It’s obviously wrong.',
            onUpVoteClick: action('onUpVoteClick'),
          },
        ]}
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
          onUserClick={ action('onUserClick')}
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
          onUserClick={ action('onUserClick')}
        />
      </div>
  )

storiesOf('Compose', module)
  .add('Message', () => (
    <div style={{ position: 'fixed', bottom: 0, right: 0, left: 0, }}>
      <ComposeMessage
        onSubmit={() => {}}
      />
    </div>
  ))
  .add('Reply', () => (
    <div style={{ position: 'fixed', bottom: 0, right: 0, left: 0, }}>
      <ComposeReply
        onSubmit={() => {}}
      />
    </div>
  ))

  storiesOf('header', module)
    .add('Navbar', () =>
      <div style={{ width: 1200, background: '#f2f2f2'}}>
        <Navbar
          onLoginClick={action('onLoginClick')}
          onRegisterClick={action('onRegisterClick')}
        />
      </div>
    )

  storiesOf('reply bar', module)
    .add('Answers for', () =>
      <div style={{ width: 355, background: '#fbfbfb'}}>
        <AnswersFor />
      </div>
    )

  storiesOf('Footer', module)
    .add('navigtion', () =>
      <div style={{ width: 1200, background: '#f2f2f2'}}>
        <Footer
          onLogoClick={action('onLogoClick')}
          onTeamClick={action('onTeamClick')}
          onContactClick={action('onContactClick')}
          onTermsClick={action('onTermsClick')}
        />
      </div>
    )

  storiesOf('SideBar Complete', module)
    .add('SideBar', () => 
        <SideBar />
    )
