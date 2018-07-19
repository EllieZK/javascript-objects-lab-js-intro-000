var recipes = {prop1: 1};

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign ({}, recipes, {['prop 2']:2} );
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete recipes.prop1
}
