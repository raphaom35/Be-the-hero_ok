const knex = require("knex");
const configaration = require("../../knexfile");
//const config =
//  process.env.NODE_ENV == "test"
//   ? configaration.test
//   : configaration.development;
const connetion = knex(configaration.development);

module.exports = connetion;
