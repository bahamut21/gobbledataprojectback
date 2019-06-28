const { Router } = require('express');

const router = Router();

const bodyParser = require('body-parser');
const connection = require('../conf');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));


/* POST insert users. */
// ok
router.post('/users/', (request, response) => {
  const formData = request.body;
  console.log(formData)
  connection.query('INSERT INTO users SET ?', formData, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
});

/* GET one users. */
// ok
router.get('/users', (request, response) => {
  connection.query('SELECT * FROM users ', (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

/* UPDATE informations users */
// ok
router.put('/album/:id', (request, response) => {
  const userId = request.params.id;
  const formData = request.body;
  connection.query('UPDATE users SET ? WHERE id = ?', [formData, userId], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

module.exports = router;
