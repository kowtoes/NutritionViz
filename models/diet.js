var dietSchema = mongoose.Schema({
  _id: { $oid: String },
  name: String,
  mealList: [Schema.Types.ObjectID]
});

dietSchema.methods.addMeal(ObjectID) {
  this.mealList.push(ObjectID);
  this.save();
}

module.exports = mongoose.model('diet', dietSchema);
