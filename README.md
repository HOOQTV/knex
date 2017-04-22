## Knex PG Read-replica

With Read-replica support for PG only.

```js
{
  connection: {
    idleTimeoutMillis: 1000 // timeout millis
  },
  readReplica: {
    connection: {
      idleTimeoutMillis: 1000 // timeout millis
    },
    pool: {
      min: 1,
      max: 5
    }
  },
  pool: {
    min: 1,
    max: 5
  }
}
```

### FIXME
- Remove non-PG
