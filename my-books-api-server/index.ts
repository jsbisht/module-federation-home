import express from 'express'
import httpProxy from 'http-proxy'

const app = express()
const port = 8888
const proxy = httpProxy.createProxyServer()
const homeApi = 'http://localhost:9001'
const upsellApi = 'http://localhost:9002'
const profileApi = 'http://localhost:9003'

proxy.on('error', function (e) {
  console.error(e)
})

/* Setting up reverse proxy */
app.use('/home', function (req, res) {
  proxy.web(req, res, { target: homeApi, forward: homeApi })
  console.log('redirecting to Server1')
})

app.use('/upsell', function (req, res) {
  console.log('redirecting to Server2')
  proxy.web(req, res, { target: upsellApi })
})

app.use('/profile', function (req, res) {
  console.log('redirecting to Server3')
  proxy.web(req, res, { target: profileApi })
})

/* listening of port in reverse proxy server */
app.listen(port, () => {
  console.log(`my-books-api-server listening at http://localhost:${port}`)
})
