//Five Baic Console Logs
console.log('Basic log.');
console.warn('Console warning.');
console.error('Console error.');
console.info('Console info.');
console.debug('Basic debug');

//String cohercion
//first arg string with %s reads second arg as String
console.log('I am %s years old' , 23);

//console css
//first argument string with %c reads second arg as css
console.log('Fun with %cCSS', 'color: blue;')

//console object
//first argument string with %o
console.log('Here is an object: %o', {id: 95});

///grouping data in Logs
for(var i = 0; i < 100; i++){
  var num = Math.random() * 100;
  console.group('Drawing number...');
  console.log('Number is is even:', num %2 === 0);
  console.log('Number is less than 25:', num < 25);
  console.groupCollapsed('Reveal your number.');
  console.log(num);
  console.groupEnd();
  console.groupEnd();
}

//collecting execution time
console.time('Time');
for(var i = 0; i < 100000; i++){
  return i%5;
}
console.timeEnd('Time');

//console data to table
var array = [];
for(var i = 0; i < 20; i++){
  var data = {ValueOne: Math.random()* 100, ValueTwo: Math.random()*103}
  array.push(data);
}

console.table(array);
console.table('ValueOne');
