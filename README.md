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
    }
  }
}
```

### FIXME
- Remove non-PG
