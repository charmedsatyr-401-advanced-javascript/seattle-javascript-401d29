'use strict';

const events = require('./events.js');

const logger = require('./logger.js');
const cache = require('./cache.js');

events.emit('save', {id:77});
