var films = [{
  title: 'A Beautiful Mind',
  director: 'Ron Howard',
  duration: 135,
  imdbRating: 8.2
}, {
  title: 'Casablanca',
  director: 'Michael Curtiz',
  duration: 102,
  imdbRating: 8.6
}, {
  title: 'The Shawshank Redemption',
  director: 'Frank Darabont',
  duration: 142,
  imdbRating: 9.3
}, ]

//Filter to find subset
var topRated = films.filter(
  function(film) {
    return film.imdbRating > 9
  }
)

//Map to refine object properties
var runTime = films.map(
  function(film) {
    return {
      title: film.title,
      duration: film.duration
    };
  }
)

//Map Reduce
var totalRuntime = films.map(
  function(film) {
    return film.duration
  }
).reduce(
  function(prev, current) {
    return prev + current;
  }
)

var multiDimesional = [
  [{
    id: 1,
    val: 32
  }, {
    id: 2,
    val: 55
  }],
  [{
    id: 1,
    val: 63
  }, {
    id: 2,
    val: 12
  }]
]

Array.prototype.concatAll = function() {
  var results = [];

  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });
  return results;
}

var flattened = multiDimesional.concatAll();
