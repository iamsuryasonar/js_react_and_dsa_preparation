// Implement a function to replace all undefined to null (argument might be any nested array or object or primitive value)
function undefinedToNull(arg) {
  if(Array.isArray(arg)){
    for(let index in arg){
      if(arg[index] === undefined){
        arg[index] = null;
      }else if(typeof arg[index] === 'object'){
        undefinedToNull(arg[index])
      }
    }
  }
  else if(typeof arg === 'object'){
    for(let key in arg){
      if(Array.isArray(arg[key])){
        undefinedToNull(arg[key]);
      }else if(typeof arg[key] === 'object'){
        undefinedToNull(arg[key]);
      }else if(arg[key] == undefined){
        arg[key] = null;
      }
    }
  }
  return arg
}

console.log(undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}))
console.log(undefinedToNull(['BFE.dev', undefined, null, {a: ['BFE.dev', undefined]}]))
