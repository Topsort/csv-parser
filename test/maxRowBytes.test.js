const test = require('ava')

const { collect } = require('./helpers/helper')

test('maxRowBytes', (t) => {
  const verify = (err, lines) => {
    t.is(err.message, 'Row exceeds the maximum size', 'strict row size')
    t.is(lines.length, 4576, '4576 rows before error')
    t.pass()
  }

  collect('option-maxRowBytes', { maxRowBytes: 200 }, verify)
})
