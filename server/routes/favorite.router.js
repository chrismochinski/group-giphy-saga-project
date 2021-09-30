const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites" ORDER BY "title" ASC;`;
  pool.query(queryText).then(
    result => res.send(result.rows))
  .catch(error => {
    console.log('Whoopsies...', error);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "favorites" VALUES ("title", "link")
  VALUES ($1 $2);`
  const queryValues = [req.body.title, req.body.link];
  pool.query(queryText, queryValues).then(() => {
    res.sendStatus(201);
  }).catch(error => {
      console.log('Whoopsies...', error);
      res.sendStatus(500);
    }
  );
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  
  const queryText = `UPDATE "favorites" SET "category_id" = $2 WHERE "id" = $1;`;
  const queryValues = [req.params.favId, req.body.category_id];
  pool.query(queryText, queryValues).then(() => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Whoopsies...', error);
    res.sendStatus(500);
  })
});

// delete a favorite
router.delete('/:favId', (req, res) => {
  const queryText = `DELETE FROM "favorites" WHERE "id"= $1;`;
  pool.query(queryText, [req.params.id]).then(() => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('Whoopsy-daisies...', error);
    res.sendStatus(500);
  })
  
});

module.exports = router;
