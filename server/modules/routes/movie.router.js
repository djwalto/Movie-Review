const express = require('express');
const pool = require('../pool');

const movieRouter = express.Router();

movieRouter.get('/', (req, res) => {
  const queryText = 'SELECT * FROM movies';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing GET movies list', err);
      res.sendStatus(500);
    });
});

movieRouter.get('/details/:id', (req, res) => {
  const queryText = 'SELECT * FROM movies WHERE id=$1';
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing GET details', err);
      res.sendStatus(500);
    });
});

movieRouter.post('/', (req, res) => {
  const newMovie = req.body;
  const queryText = `INSERT INTO movies ("title", "description")
                    VALUES ($1, $2)`;
  const queryValues = [newMovie.title, newMovie.description];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error completing POST newMovie', err);
      res.sendStatus(500);
    });
});

movieRouter.put('/', (req, res) => {
  const updatedMovie = req.body;

  const queryText = `UPDATE movies
  SET "title" = $1, 
  "description" = $2, 
  WHERE id=$3;`;

  const queryValues = [
    updatedMovie.title,
    updatedMovie.description,
    updatedMovie.id,
  ];

  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error completing PUT movies', err);
      res.sendStatus(500);
    });
});

movieRouter.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM movies WHERE id=$1';
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error completing DELETE movie', err);
      res.sendStatus(500);
    });
});

module.exports = movieRouter;
