import express from 'express'
import { Request } from 'express-serve-static-core'

const app = express()
const port = 9001

/* mocking responses based on context */
function contextMapper(req: Request) {
  const { query } = req
  const { context } = query
  const INLINE_WIDGET = {
    status: 'ok',
    components: [
      {
        id: 'InlineWidget',
        from: 'uilib',
        props: {
          type: 'offer',
          message: 'My Books Home Page (inline)'
        }
      }
    ]
  }
  const INTERSTITIAL_WIDGET = {
    status: 'ok',
    components: [
      {
        id: 'InlineWidget',
        from: 'uilib',
        props: {
          type: 'offer',
          message: 'Welcome Michelle (interstitial)'
        }
      }
    ]
  }
  const POPUP_WIDGET = {
    status: 'ok',
    components: [
      {
        id: 'InlineWidget',
        from: 'uilib',
        props: {
          type: 'offer',
          message: 'Redeem Points (popup)'
        }
      }
    ]
  }

  switch (context) {
    case 'new':
      return POPUP_WIDGET
    case 'existing':
      return INTERSTITIAL_WIDGET
    default:
      return INLINE_WIDGET
  }
}

app.get('/', (req, res) => {
  console.log(req.url, req.baseUrl, req.query)

  res.json(contextMapper(req))
})

app.listen(port, () => {
  console.log(`my-books-api-home listening at http://localhost:${port}`)
})
