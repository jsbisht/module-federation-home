import express from 'express'
import httpProxy from 'http-proxy'

const app = express()
const port = 8888
const apiProxy = httpProxy.createProxyServer()
const homeApi = 'http://localhost:9001'
const upsellApi = 'http://localhost:9002'
const profileApi = 'http://localhost:9003'

/* Setting up reverse proxy */
app.all('/home/*', function (req, res) {
  console.log('redirecting to Server1')
  apiProxy.web(req, res, { target: homeApi })
})

app.all('/upsell/*', function (req, res) {
  console.log('redirecting to Server2')
  apiProxy.web(req, res, { target: upsellApi })
})

app.all('/profile/*', function (req, res) {
  console.log('redirecting to Server3')
  apiProxy.web(req, res, { target: profileApi })
})

/* listening of port in reverse proxy server */
app.listen(port, () => {
  console.log(`my-books-api-server listening at http://localhost:${port}`)
})
