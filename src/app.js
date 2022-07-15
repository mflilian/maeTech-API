const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');


const express = require("express")
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const index = require("./routes/index")
const candidatas = require("./routes/candidatasRouter")
const empresas = require("./routes/empresaRouter")
const vagas = require("./routes/vagasRouter")

require('dotenv-safe').config()

const dataBase = require("./model/database");
dataBase.connect()

const app = express()

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(compression())

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.json())

app.use("/", index);
app.use("/candidatas", candidatas);
app.use("/empresas", empresas);
app.use("/vagas", vagas)


module.exports = app

