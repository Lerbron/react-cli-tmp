
var proxy = {
  '/fishVideo/': {
    target: 'https://mip.yesky.com',
    changeOrigin: true
  }
}

var entry = ['index']

var vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'axios',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-loadable'
]

var baseUrl = '/'

module.exports = {
  vendor,
  entry,
  proxy,
  baseUrl
}