const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
//app.use(require('connect').bodyParser);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




/*app.use(express.json());
app.use(express.urlencoded({ extended: true }));*/

app.use(routes);

// sync sequelize models to the database, then turn on the server
/*app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});*/


sequelize.sync({ force: false }).then(() => {  //force true clear out DB, delete tables , false will not delete everything
  app.listen(PORT, () => console.log('Now listening'));
});
