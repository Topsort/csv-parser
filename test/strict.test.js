const test = require('ava')

const { collect } = require('./helpers/helper')

test('strict', (t) => {
  const verify = (err, lines) => {
    t.is(err.name, 'CsvParserError', 'err name')
    t.regex(err.message, /Row length \(\d+\) does not match headers \(\d+\)/, 'strict row length')
    t.snapshot(lines[0], 'first row')
    t.snapshot(lines[1], 'second row')
    t.is(lines.length, 2, '2 rows before error')
    t.pass()
  }

  collect('strict', { strict: true }, verify)
})
