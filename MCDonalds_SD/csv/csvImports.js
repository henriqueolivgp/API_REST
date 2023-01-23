const fs = require('fs');
const {parse} = require('csv-parse');
const client = require('../services/knexfile')

/*connect to the database
client.connect(err => {
    if(err) {
        console.log('Error connecting to the database: ', err.stack);
    } else {
        console.log('Connected to the database.');
    }
});*/
const parser = parse({columns:true}, function (err, records){
    console.log(records);
  });

//fs.createReadStream(__dirname+'/menu.csv').pipe(parser);

// Open the CSV file and import the specified column
console.log('comeco aqui');
 fs.createReadStream(__dirname+'/menu.csv').pipe(parser)
   .on('categories', (row) => { ;
        client.query(`INSERT INTO categories (category) VALUES (${row.Category})`, (err, res) => {
          if (err) {
              console.log('Error inserting data: ', err);
          } else {
              console.log(res);
          }
      });
    })
    .on('end', () => {
        console.log('CSV file imported successfully');
       
    });

