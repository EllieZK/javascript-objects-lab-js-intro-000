var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  object.assign({}, recipes, {['prop2']: '2'} );
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   recipes.prop2 = 2;
   return recipes;
}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.prop
  return recipes
}
