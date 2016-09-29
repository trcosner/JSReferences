var data = [];

for(var i = 0; i < 10000; i++){
  var object = {
    val1: i,
    val2: i%2,
    val3: i%5,
    val4: i%7
  }
  data.push(object);
}

//forEach Implementation of Map
var array = [];

console.time('forEach Map')
data.forEach(function(item){
    var obj = {
      id: item.val1,
      modTwo: item.val2
    };
    array.push(obj);
});
console.timeEnd('forEach Map');

//Reduce Implementation of Map
//Reduce and map typically have similar execution times
//the difference is reduce can also implement array.Filter
//whereas .map().filer() loops executes at O(2n)
console.time('Reduce Map');
data.reduce(function(acc, item){
  obj = {
    id: item.val1,
    modTwo: item.val2
  };
  acc.push(obj);

  return acc;
}, [])
console.timeEnd('Reduce Map');


//Standard Implementation of Map
console.time('map');
data.map(function(item){
  return {
    id: item.val1,
    modTwo: item.val2
  };
});
console.timeEnd('map');
