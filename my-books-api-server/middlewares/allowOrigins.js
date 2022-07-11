import { HOME_API, PROFILE_API, UPSELL_API } from '../utility/constants'

export function allowOrigins(req, res, next) {
  const allowedOrigins = [HOME_API, UPSELL_API, PROFILE_API]
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  next()
}
