const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {parse} = require('csv-parse');
const fs = require('fs');
const config = require('./config');
const db = require('./data/database')

//fs.createReadStream(__dirname+'/csv/menu.csv').pipe(parser);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: true}));

//ROUTES VÃO SER COLOCADOS AQUI!
const route = require('./routes/index.js');
app.use('/api/v1', route);

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());


// url da api
app.listen(config.port, () => {
  console.log(`api is listening on port ${config.port}!`)
});

