const {model} = require('mongoose');
const {PositionsSchema} = require('../schemas/PositionSchema');
const PositionsModel = model('Positions', PositionsSchema);
module.exports = {PositionsModel};