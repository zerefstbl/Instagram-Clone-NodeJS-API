const express = require('express');
const { default: mongoose } = require('mongoose');
const router = require('./Utils/router');
require('dotenv').config();
const mongoConnection = process.env.MONGO_URI

const app = express();

mongoose.connect(mongoConnection, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, () => console.log('Connected in DataBase'))

app.use(express.json());
app.use(router);

app.listen(8000, () => console.log('Servidor esta rodando!!'));