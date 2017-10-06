import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { addGraphQLSubscriptions } from 'add-graphql-subscriptions'

import { AUTH0_ID_TOKEN_KEY } from '../utils/config'

let ws
if (!process.browser) {
  eval('require("isomorphic-fetch")')
  ws = eval('require("ws")')
}

const SIMPLE_ENDPOINT = 'https://api.graph.cool/simple/v1/just-one-rocks'
const SUBSCRIPTIONS_ENDPOINT = 'wss://subscriptions.graph.cool/v1/cj7oso6cs07i70179ccz9zdgj'

let apolloClient = null

function create(initialState) {

  // Setup socket client for subscriptions
  const wsClient = new SubscriptionClient(
    SUBSCRIPTIONS_ENDPOINT,
    { reconnect: true },
    ws
  )

  const networkInterface = createNetworkInterface({
    uri: SIMPLE_ENDPOINT,
    opts: { // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin'
    },
    dataIdFromObject: o => o.id,
  })

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      if (!process.browser) {
        next()
      }

      const idToken = localStorage.getItem(AUTH0_ID_TOKEN_KEY)
      req.options.headers.authorization = idToken ?
        `Bearer ${idToken}` : null
      next()
    }
  }])

  // Extend the network interface with the WebSocket
  const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient,
  )

  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: networkInterfaceWithSubscriptions,
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
