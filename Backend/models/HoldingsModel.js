const {model} = require('mongoose');
const {HoldingSchema} = require('../schemas/HoldingSchema');
const HoldingsModel = new model('Holdings', HoldingSchema); 
module.exports = {HoldingsModel};