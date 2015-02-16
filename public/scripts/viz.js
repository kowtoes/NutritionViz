console.log("test");
var foodList = [#{foodlist}];
var xAxisLabels = [ "NDB_No", "Water","Energ_Kcal", "Protein", "Tot_Lipid", "Carbohydrt", "Fiber_TD", "Ash",
"Calcium", "Phosphorus", "Iron", "Sodium", "Potassium", "Magnesium", "Zinc", "Copper", "Vit_A", "Vit_E",
"Thiamin", "Riboflavin", "Niacin", "Vit_C", "FA_Sat","FA_Mono","FA_Poly", "Cholestrl", "GmWt_1", "Refuse_Pct"];
// 29 entries
var yvalues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for (item in foodList) {
  var x = 0;
  for (property in foodList[JSON.parse(item)]) {
    if (foodList[JSON.parse(item)].hasOwnProperty(property) && typeof foodList[item][property] === "number") {
      console.log(foodList[item][property]);
      yvalues[x] += foodList[item][property];
      x++;
    }
  }
  x %= 27;
}
var averages = yvalues.map(function(num) {
return num / foodList.length;
});
console.log(averages);
