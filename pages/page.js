import React, { Component } from 'react'
import withData from '../utils/withData'

import Login from '../containers/Login'
import PageHeader from '../containers/PageHeader'

class Page extends Component {
  render() {
    const { url: { query: { slug }}} = this.props
    console.log('[Page] slug:', slug)
    return (
      <div>
        <Login />
        <PageHeader slug={slug} />
      </div>
    )
  }
}

export default withData(Page)
