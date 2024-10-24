const test = require('ava')

const { collect } = require('./helpers/helper')

test('comment', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines)
    t.is(lines.length, 1, '1 row')
    t.pass()
  }

  collect('comment', { skipComments: true }, verify)
})

test('custom comment', (t) => {
  const verify = (err, lines) => {
    t.false(err, 'no err')
    t.snapshot(lines)
    t.is(lines.length, 1, '1 row')
    t.pass()
  }

  collect('option-comment', { skipComments: '~' }, verify)
})
