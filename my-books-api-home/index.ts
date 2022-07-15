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

  // <label for="lname">Last name:</label><br>
  // <input type="text" id="lname" name="lname" value="Doe"><br><br>
  // <input type="submit" value="Submit">
  const POPUP_WIDGET = {
    status: 'ok',
    components: [
      {
        id: 'form',
        from: 'window',
        components: [
          {
            id: 'label',
            from: 'window',
            props: {
              htmlFor: 'fname'
            },
            content: 'First name:'
          },
          {
            id: 'br',
            from: 'window'
          },
          {
            id: 'input',
            from: 'window',
            props: {
              id: 'fname',
              name: 'fname',
              type: 'text',
              value: 'John',
              readOnly: true
            }
          },
          {
            id: 'br',
            from: 'window'
          },
          {
            id: 'label',
            from: 'window',
            props: {
              htmlFor: 'lname'
            },
            content: 'Last name:'
          },
          {
            id: 'br',
            from: 'window'
          },
          {
            id: 'input',
            from: 'window',
            props: {
              id: 'lname',
              name: 'lname',
              type: 'text',
              value: 'John'
            }
          },
          {
            id: 'br',
            from: 'window'
          },
          {
            id: 'input',
            from: 'window',
            props: {
              type: 'submit',
              value: 'Submit'
            }
          }
        ]
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
