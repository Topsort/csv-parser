const test = require('ava')

const { collect } = require('./helpers/helper')

test('custom escape character', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines[0], 'first row')
    t.snapshot(lines[1], 'second row')
    t.snapshot(lines[2], 'third row')
    t.is(lines.length, 3, '3 rows')
    t.pass()
  }

  collect('option-escape', { escape: '\\' }, verify)
})

test('headers: false', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines)
    t.pass()
  }

  collect('no-headers', { headers: false }, verify)
})

test('headers option', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines)
    t.pass()
  }

  collect('headers', { headers: ['a', 'b', 'c'] }, verify)
})
