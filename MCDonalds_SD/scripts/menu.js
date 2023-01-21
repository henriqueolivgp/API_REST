const db = require('../db')

;(async () => {
  try {
    await db.schema.dropTableIfExists('menu')
    await db.schema.withSchema('public').createTable('menu', (table) => {
      table.increments()
      table.string('categories')
      table.string('')
    })
    console.log('Created menus table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
