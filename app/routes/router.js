var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("pages/home", { tarefas: null });
  });

  router.get("/Construcoes", function (req, res) {
    res.render("pages/Construcoes", { tarefas: null });
  });

  router.get("/Sobrenos", function (req, res) {
    res.render("pages/Sobrenos", { tarefas: null });
  });
  
  module.exports = router;