import express from 'express'
import cors from 'cors'
import httpProxy from 'http-proxy'
import { allowOrigins } from './middlewares/allowOrigins'
import { HOME_API, PROFILE_API, UPSELL_API } from './utility/constants'

const app = express()
const router = express.Router()
const port = 8888
const proxy = httpProxy.createProxyServer()

proxy.on('error', function (e) {
  console.error(e)
})

app.use(cors({ origin: true }))
app.use(allowOrigins)

/* Setting up reverse proxy */
router.use('/home*', function (req, res) {
  proxy.web(req, res, { target: HOME_API })
  console.log('redirecting to HOME_API')
})

router.use('/upsell*', function (req, res) {
  console.log('redirecting to UPSELL_API')
  proxy.web(req, res, { target: UPSELL_API })
})

router.use('/profile*', function (req, res) {
  console.log('redirecting to PROFILE_API')
  proxy.web(req, res, { target: PROFILE_API })
})

app.use('/api', router)

/* listening of port in reverse proxy server */
app.listen(port, () => {
  console.log(`my-books-api-server listening at http://localhost:${port}`)
})
