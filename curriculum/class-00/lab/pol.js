'use strict';

let proofoflife = module.exports = {};

proofoflife.isAlive = function(dead) {
  return !(!!dead);
};
