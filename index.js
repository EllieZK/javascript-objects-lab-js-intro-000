var recipes = {prop: '1'};
var newRecipes = Object.assign({}, recipes);

function updateObjectWithKeyAndValue(object, key, value){
  {return Object.assign({}, recipes, { [key]: value })}
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   recipes.prop2 = '2';
   return recipes;
}

function deleteFromObjectByKey(object, key){
  return {delete newRecipes.prop;};
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.prop;
  return recipes;
}
