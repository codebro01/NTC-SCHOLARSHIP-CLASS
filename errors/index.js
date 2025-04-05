const customApiError =  require('./customApiError.js')
const badRequestError = require('./badRequestError.js')
const notFoundError = require('./notFoundError.js')
const unAuthenticatedError = require('./unAuthenticatedError.js')

exports.default = { customApiError, badRequestError, notFoundError, unAuthenticatedError }
