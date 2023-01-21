const express = require('express');
const cors = require('cors');
const {parse} = require('csv-parse');
const fs = require('fs');
const swaggerUI = require('swagger-ui-express');
const createConnection = require('./db');

const config = require('./config');
const swaggerConfig = {
  ...require("./doc/swagger.json"),
  host:       `${config.hostname}:${config.port}`,
  basePath:   `${config.baseUrl}`
};

const db = require('./db')

const parser = parse({columns:true}, function (err, records){
  console.log(records);
});

fs.createReadStream(__dirname+'/csv/menu.csv').pipe(parser);

const app = express();
const apiUrl = require("./api-url");
const controllers = require("./controllers/users");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: true}));
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

fs.createReadStream('./csv/menu.csv')
  .pipe(parse())
  .on('data', (row) => {
    createConnection(async (db) => {
        const collection = db.collection('categories');
        await collection.insertOne(category);
    })
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

const router = require('./routes/index.js');
app.use('/api/v1', router);

// alguns testes de end point

app.get('/users', async (req, res) => {
  const users = await db.select().from('users')
  res.json(users)
})

app.post('/users', async (req, res) => {
  const user = await db('users').insert({ name: req.body.name }).returning('*')
  res.json(user)
})

app.get('/categories', async (req, res) => {
  const categories = await db.select().from('categories')
  res.json(categories)
})


// url da api
app.listen(config.port, () => {
  console.log(`api is listening on port ${config.port}!`)
});

