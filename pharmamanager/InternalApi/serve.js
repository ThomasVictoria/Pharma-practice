const cors = require("cors");
const express = require ("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PharmaRoutes = require('./pharma.routes.js');



const port = 1200;
const app = express();
const Database = 'mongodb://67.207.90.23:27017/pharma';


mongoose.Promise = global.Promise;
mongoose.connect(Database, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log(`Connected to ${Database}`) },
  err => { console.log('We have a problem with our database'+ err)}
);

//middleware
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', PharmaRoutes);
// app.use('/edit/:id', PharmaRoutes);



app.listen(port, () =>
  console.log(`Algolia app!`),
);
