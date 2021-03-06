'use strict';

const Sequelize = require('sequelize');
let config = require(__dirname + '/../config/db-config');
const Op = Sequelize.Op


let db = {};
let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* MODELS */

/* CORE */
db.User = require('./core/user')(sequelize, Sequelize);
db.BusinessSearch = require('./business/business-search')(sequelize, Sequelize);
db.Searching = require('./business/searching')(sequelize, Sequelize);

/* MAPPING */

module.exports = db;
