const db = require('../db')

;(async () => {
  try {
    await db('users').insert({ email: 'admin@admin.com', password: 'admin1234', rule: 'admin' })
    await db('users').insert({ email: 'view@view.com', password: 'view1234', rule: 'view' })
    await db('users').insert({ email: 'edit@edit.com', password: 'edit1234', rule: 'edit' })
    console.log('Added dummy users!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
