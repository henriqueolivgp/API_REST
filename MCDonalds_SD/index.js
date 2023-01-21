const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const {parse} = require('csv-parse')
const fs = require('fs')
const swaggerUI = require('swagger-ui-express');

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


const PORT = process.env.PORT || 5000
const app = express();
const apiUrl = require("./api-url");
const controllers = require("./controllers");

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: true}));
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.get('/api/v1', (req, res) => res.send('Hello World!'))

app.get('/users', async (req, res) => {
  const users = await db.select().from('users')
  res.json(users)
})

app.post('/users', async (req, res) => {
  const user = await db('users').insert({ name: req.body.name }).returning('*')
  res.json(user)
})

app.listen(config.port, () => {
  console.log(`api is listening on port ${config.port}!`)
});

