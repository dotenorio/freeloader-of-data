const freeloader = require('../')
const url = 'https://github.com/dotenorio/freeloader/raw/master/site/index.html'

freeloader(url, (err, meta) => {
  if (err) throw err
  console.log(meta)
})
