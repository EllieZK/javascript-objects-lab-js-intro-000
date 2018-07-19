var recipes = {'prop 1': 1};

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign ({}, recipes, {['prop 2']:2} )
}
