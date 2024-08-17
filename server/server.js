const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const db = require('./db');
dotenv.config({ path: './.env' });

app.use(cors());
app.use(express.json());
app.use(express.static('/public'));

const routes = require('./routes');
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
