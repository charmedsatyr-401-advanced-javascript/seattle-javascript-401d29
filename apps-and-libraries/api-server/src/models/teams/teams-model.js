'use strict';

const Model = require('../mongo.js');
const schema = require('./teams-schema.js');

/**
 * Class representing a Team.
 * @extends Model
 */
class Teams extends Model {}

module.exports = new Teams(schema);

