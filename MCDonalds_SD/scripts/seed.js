const db = require('../db')

;(async () => {
  try {
    await db('users').insert({ email: 'admin@admin.com', password: 'admin1234' })
    await db('users').insert({ email: 'view@view.com', password: 'view1234' })
    await db('users').insert({ email: 'edit@edit.com', password: 'edit1234' })
    console.log('Added dummy users!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
