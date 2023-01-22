const db = require('../scripts/knexfile')

;(async () => {
  try {
    await db.schema.dropTableIfExists('users')
    await db.schema.withSchema('public').createTable('users', (table) => {
      table.increments('id').primary()
      table.string('email')
      table.string('password')
      table.string('rule')
    })
    console.log('Created users table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
