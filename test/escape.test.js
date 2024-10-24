const test = require('ava')

const { collect } = require('./helpers/helper')

test('headers: false, numeric column names', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines, 'lines')
    t.is(lines.length, 2, '2 rows')
    t.pass()
  }

  collect('basic', { headers: false }, verify)
})
