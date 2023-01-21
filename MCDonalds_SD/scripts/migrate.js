const db = require('../db')

;(async () => {
  try {
    await db.schema.dropTableIfExists('users')
    await db.schema.withSchema('public').createTable('users', (table) => {
      table.increments()
      table.string('email')
      table.string('password')
    })
    console.log('Created users table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
