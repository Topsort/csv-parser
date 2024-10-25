const test = require('ava')

const { collect } = require('./helpers/helper')

test('maxRowBytes', (t) => {
  const verify = (err, lines) => {
    t.is(err.name, 'CsvParserError', 'err name')
    console.log(err.message)
    t.regex(err.message, /Row length \(\d+\) exceeds the maximum size \(\d+\)/, 'strict row size')
    t.is(lines.length, 4576, '4576 rows before error')
    t.pass()
  }

  collect('option-maxRowBytes', { maxRowBytes: 200 }, verify)
})
