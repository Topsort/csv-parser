const test = require('ava')

const { collect } = require('./helpers/helper')

test('custom quote character', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines[0], 'first row')
    t.snapshot(lines[1], 'second row')
    t.is(lines.length, 2, '2 rows')
    t.pass()
  }

  collect('option-quote', { quote: "'" }, verify)
})

test('custom quote and escape character', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines[0], 'first row')
    t.snapshot(lines[1], 'second row')
    t.snapshot(lines[2], 'third row')
    t.is(lines.length, 3, '3 rows')
    t.pass()
  }

  collect('option-quote-escape', { quote: "'", escape: '\\' }, verify)
})

test('quote many', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines[0], 'first row')
    t.snapshot(lines[1], 'second row')
    t.snapshot(lines[2], 'third row')
    t.is(lines.length, 3, '3 rows')
    t.pass()
  }

  collect('option-quote-many', { quote: "'" }, verify)
})
