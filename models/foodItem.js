var mongoose = require('mongoose');


var foodItemSchema = mongoose.Schema({
  _id: { $oid: String },
  NDB_No: Number,
  MajorGroup: String,
  FdGp_Desc: String,
  Short_Desc: String,
  Water: Number,
  Energ_Kcal: Number,
  Protein: Number,
  Tot_Lipid: Number,
  Carbohydrt: Number,
  Fiber_TD: Number,
  Ash: Number,
  Calcium: Number,
  Phosphorus: Number,
  Iron: Number,
  Sodium: Number,
  Potassium: Number,
  Magnesium: Number,
  Zinc: Number,
  Copper: Number,
  Vit_A: Number,
  Vit_E: Number,
  Thiamin: Number,
  Riboflavin: Number,
  Niacin: Number,
  Vit_C: Number,
  FA_Sat: Number,
  FA_Mono: Number,
  FA_Poly: Number,
  Cholestrl: Number,
  GmWt_1: Number,
  GmWt_Desc1: String,
  Refuse_Pct: Number
}, {collection: 'nut'});


foodItemSchema.methods.isRelevant = function (filter) {
  return this.Short_Desc.indexOf(filter) > -1;
}

module.exports = mongoose.model('foodItem', foodItemSchema);
