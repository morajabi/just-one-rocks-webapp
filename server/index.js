const express = require('express')
const next = require('next')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/page/:slug', (req, res) => {
    const { query, params } = req
    return app.render(req, res, `/page`, { ...params, ...query })
  })

  server.get('/sw.js', (req, res) => {
    app.serveStatic(req, res, path.resolve('./.next/sw.js'))
	})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
