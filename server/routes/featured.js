const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/feature', (req, res) => {
    db.query(`
    SELECT *
    FROM products
    WHERE feature = true
    `)
    .then(data => {
      res.json(data.rows)
    })
  })
  return router;
}