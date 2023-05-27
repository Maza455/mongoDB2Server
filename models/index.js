const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./hero.model")(mongoose);

module.exports = db;