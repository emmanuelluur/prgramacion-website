const express = require('express');
const router = express.Router();

const title = "Programación Básica";
let link_main;
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {tittle: title, link_main: "#"});
});
router.get('/scratch/1', (req, res, next) => {
  res.render('./scratch/ejercicio_1', {tittle: title, link_main: "/"});
});
module.exports = router;
