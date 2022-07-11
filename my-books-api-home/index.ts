import express from 'express'
import { Request } from 'express-serve-static-core'

const app = express()
const port = 9001

function contextMapper(req: Request) {
  const hasCreatedInvoice = false
  if (hasCreatedInvoice) {
    return {
      status: 'ok',
      components: [
        {
          id: 'PopupWidget',
          props: {
            components: [
              {
                id: 'form',
                props: {
                  components: [
                    { id: 'label', props: { text: 'Points', value: '1990' } },
                    { id: 'input', props: { text: 'Redeem', value: '1000' } },
                    { id: 'button', props: { text: 'Redeem now' } }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  } else {
    return {
      status: 'ok',
      components: [
        {
          id: 'InlineWidget',
          props: {
            type: 'offer',
            message: 'Welcome back Michelle'
          }
        }
      ]
    }
  }
}

app.get('/', (req, res) => {
  res.json(contextMapper(req))
})

app.listen(port, () => {
  console.log(`my-books-api-home listening at http://localhost:${port}`)
})
