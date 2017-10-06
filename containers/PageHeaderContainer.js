import React, { PureComponent } from 'react'
import { gql, graphql } from 'react-apollo'

import PageHeader from 'components/PageHeader'

class PageHeaderContainer extends PureComponent {
  render() {
    const { page, loading, error } = this.props
    console.log(page, loading, error)
    return (
      <PageHeader sides={page && page.sides} />
    )
  }

  clicked = () => {
    this.lock.show()
  }
}

const GetPage = gql`
  query getPage($slug: String!) {
    allPages(filter: { slug: $slug }) {
      slug
      sides {
        name
        picture
        color
      }
    }
  }
`

export default graphql(GetPage, {
  name: 'page',

  // Get slug from the pathname
  options: ({ slug }) => ({
    variables: {
      slug,
    }
  }),

  // Inject only the props we need
  props: ({ page: { allPages, loading, error } }) => ({
    page: allPages && allPages[0],
    loading,
    error,
  })
})(PageHeaderContainer)
