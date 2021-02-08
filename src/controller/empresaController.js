require("dotenv-safe").config();
const { connect } = require("../model/database");
const empresaModel = require("../model/empresa");
const candidatasModel = require("../model/candidatas");
const vagasModel = require("../model/vagas")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

/// NOVA EMPRESA REGISTRO

const registerNewEmpresa = (req, res) => {
    ;
      const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
      req.body.password = encryptedPassword;
      const newEmpresa = new empresaModel(req.body);
      newEmpresa.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({
          message: "A empresa foi registrada com sucesso!",
          administrator: newEmpresa,
        });
      });
      };

   /// REGISTRO VAGA
/* 
     const registerNewVaga = (req, res) => {
    
      const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
      req.body.password = encryptedPassword;
      const newVaga = new vagasModel(req.body);
      newVaga.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({ 
          message: "A vaga foi registrada com sucesso!",
          administrator: newVaga,
        });
      });
      }; */


  /*     const registerNewVaga = (req, res) => {
        const token = auth(req, res);
        jwt.verify(token, SECRET, (err) => {
          if (err) {
            return res.status(403).send("Invalid token!");
          }
          const newVaga = new vagasModel(req.body);
          newVaga.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({ 
          message: "A vaga foi registrada com sucesso!"})
          });
        })};
 */



  const registerNewVaga = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Acesso negado: token inválido');
    };

    const newVagas = new vagasModel(req.body);
    newVagas.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      };
      res.status(201).send({ 
        message: "A vaga foi registrada com sucesso!"})
    });
  })}



  /// ROTA DE LOGIN EMPRESA

  const loginEmpresa = (req, res) => {
      empresaModel.findOne({ email: req.body.email }, (err, empresa) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      };
      if (!empresa) {
        return res.status(404).send('Não há instituição cadastrada com esse email');
      };
  
      const password = bcrypt.compareSync(req.body.password, empresa.password);
      if (!password) {
        return res.status(403).send('Acesso negado: senha incorreta');
      };
  
      const token = jwt.sign({ email: empresa.email }, SECRET);
      return res.status(200).send(token);
    });
  };
  

//// CANDIDATAS POR ID

    const candidataById = (req, res) => {
    const id = req.params.id;
    candidatasModel.findById(id, (err, candidata) => {
      if (err) {
        res.status(424).send({ message: err.message });
      } else if (candidata) {
        return res.status(200).send(candidata);
      }
      res.status(404).send("Candidata não encontrada!");
    });
  };


  ////// REMOVE EMPRESA PELO ID 

   const removeEmpresaById = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(403).send("Invalid token!");
      }
      const params = req.query;
      empresaModel.deleteOne(params, (err, id) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        } else if (id) {
          return res.status(200).send("Empresa removida com sucesso!");
        }
        res.status(404).send("Empresa nao encontrada!");
      });
    });
  };

  
  //// TODAS AS CANDIDATAS 

  const allCandidatas = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(403).send("Token inválido");
      }
    });
    candidatasModel.find((err, candidata) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      }
      res.status(200).send(candidata);
    });
  };
  


module.exports = {
    registerNewEmpresa,
    registerNewVaga,
    loginEmpresa,
    allCandidatas,
    candidataById,
    removeEmpresaById
}