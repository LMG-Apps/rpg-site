
const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')

const checkJwt = (req, res, next) => {
  const { url: path } = req

  const excludedPaths = ['/sign-in', '/sign-up', '/refresh']
  const isExcluded = !!excludedPaths.find(p => p.startsWith(path))

  if (isExcluded) {
    return next()
  }
  const token = getTokenFromHeaders(req.headers)

  if (!token) {
    return res.jsonUnauthorized(null, 'Invalid Token')
  }

  try {
    const decoded = verifyJwt(token)
    req.accountId = decoded.id
    next()
  } catch (e) {
    return res.jsonUnauthorized(null, 'Invalid Token')
  }
}

module.exports = checkJwt
