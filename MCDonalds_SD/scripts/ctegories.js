const db = require('../db');

;(async () => {
  try {
    await db.schema.dropTableIfExists('categories')
    await db.schema.withSchema('public').createTable('categories', (table) => {
      table.increments()
      table.string('category')
    })
    console.log('Created menus table!')
    process.exit(0)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
