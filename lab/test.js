import test from 'ava'

test('failing', t => {
  console.log('should not run on root test')
  t.fail()
})
