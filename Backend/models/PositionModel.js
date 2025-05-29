const {model} = require('mongoose');
const {PostionSchema} = require('../schemas/PositionSchema');
const PositionModel = new model('Positions', PostionSchema);
module.exports = {PositionModel};