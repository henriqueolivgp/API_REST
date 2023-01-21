const express = require('express');
const cors = require('cors');
const {parse} = require('csv-parse');
const fs = require('fs');
const config = require('./config');

const db = require('./db')

const parser = parse({columns:true}, function (err, records){
  console.log(records);
});

fs.createReadStream(__dirname+'/csv/menu.csv').pipe(parser);

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: true}));

//ROUTES VÃO SER COLOCADOS AQUI!
const router = require('./routes/index.js');
app.use('/api', router);

// url da api
app.listen(config.port, () => {
  console.log(`api is listening on port ${config.port}!`)
});

