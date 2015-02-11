var mealSchema = mongoose.Schema({
  _id: { $oid: String },
  name: String,
  foodList: [Schema.Types.ObjectID]
});

mealSchema.methods.addFoodItem(ObjectID) {
  this.foodList.push(ObjectID);
  this.save();
}

module.exports = mongoose.model('meal', mealSchema);
