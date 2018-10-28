const og = require('open-graph')
const request = require('request')
const _url = require('url')
const async = require('async')

function treatUrl (url, prefix = '//') {
  let purl = _url.parse(url)
  if (!purl.protocol) { purl = _url.parse(prefix + url) }
  url = _url.format(purl)
  return url
}

function tryDiscoverMetaData (url, callback) {
  url = treatUrl(url)

  request({
    url: url,
    encoding: 'utf8',
    gzip: true,
    jar: true
  },
  function (err, res, body) {
    if (err) return callback(err)

    if (res.statusCode === 200) {
      const meta = {}
      try {
        meta.title = RegExp(/<title>(.*)<\/title>/).exec(body)[1]
        meta.image = {
          url: treatUrl(RegExp(/<img.*?src=['"](.*?)['"]/).exec(body)[1], url)
        }
        meta.author = RegExp(/<meta.*?name=['"]author['"].*?content=['"](.*?)['"]/).exec(body)[1]
      } catch (e) {}
      callback(null, meta)
    } else {
      callback(new Error('Request failed with HTTP status code: ' + res.statusCode))
    }
  })
}

function getOpenGraph (url, callback) {
  og(url, callback)
}

module.exports = (url, callback) => {
  async.parallel([
    (next) => getOpenGraph(url, next),
    (next) => tryDiscoverMetaData(url, next)
  ], (err, result) => {
    if (err) return callback(err)
    callback(null, { ...result[0], ...result[1] })
  })
}
