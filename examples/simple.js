const freeloader = require('../')
const url = 'https://raw.githubusercontent.com/dotenorio/freeloader/master/examples/site/index.html'

freeloader(url, (err, meta) => {
  if (err) throw err
  console.log(meta)
})
