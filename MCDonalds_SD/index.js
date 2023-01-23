const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config')
const morgan = require('morgan');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: true}));

//ROUTES VÃO SER COLOCADOS AQUI!
const route = require('./routes/index.js');
app.use('/api/v1', route);

// using bodyParser to parse JSON bodies into JS objects
app.use(morgan('dev'))
app.use(bodyParser.json());

// url da api
app.listen(config.port, () => {
  console.log(`api is listening on port ${config.port}!`)
});

