const { Client } = require('pg')

const credentials = {
  user: 'postgres',
  host: 'localhost',
  database: 'test-db',
  password: 'postgres',
  port: 5432,
}

const client = new Client(credentials)

client.connect(function(err)  {
  if (err) throw err;
  console.log('Connected!');
})

module.exports = client
