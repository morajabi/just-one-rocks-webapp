import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import ShareThis from '../components/ShareThis'
import KarmaBox from '../components/KarmaBox'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('ShareThis', module)
  .add('Full', () => <div style={{ width: 262 }}><ShareThis /></div>)

storiesOf('KarmaBox', module)
  .add('whole box', () => <div style={{ width: 262 }}><KarmaBox /></div>)
