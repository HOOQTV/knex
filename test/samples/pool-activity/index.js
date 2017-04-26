const knex = require('knex-pg-rr')
const pg = require('pg')

const connection = {
  // TODO: get this from .env
  user: 'hooqapi',
  database: 'backstage',
  password: 'hooqapi-password1!',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1000,
}

const options = {
  client: 'pg',
  connection,
  readReplica: {
    // this should be the read replica connection settings
    connection: {
      user: 'hooqapi',
      database: 'backstage',
      password: 'hooqapi-password1!',
      host: 'localhost',
      port: 5432,
      max: 10,
      idleTimeoutMillis: 1000
    }
  }
}

const table = knex(options)
const pool = new pg.Pool(connection)

async function run() {
  let tasks = []
  for (let i = 0; i < 100; i++) {
    tasks.push(table('accounts').count())
  }
  await (() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 5000)
    })
  })()
  return Promise.all(tasks)
}

table.on('pool-activity', function(info) {
  console.log('INFO', info);
})

run()
  .then((result) => {
    console.log('OK!', result.length);
  })
