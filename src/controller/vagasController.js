require("dotenv-safe").config();
const { connect } = require("../model/database");
const vagasModel = require("../model/vagas");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

/// NOVA VAGA REGISTRO


        const getAllVagas = (req, res) => {
        const token = auth(req, res);
        jwt.verify(token, SECRET, (err) => {
          if (err) {
            return res.status(403).send("Token inválido");
          }
        });
        vagasModel.find((err, vagas) => {
          if (err) {
            return res.status(424).send({ message: err.message });
          }
          res.status(200).send(vagas);
        });
      };

      module.exports = {
        getAllVagas
      }