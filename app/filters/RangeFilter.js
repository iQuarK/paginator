
/* Filter to show a list of natural numbers */
angular.module('assignment.filters', [])
  .filter('RangeFilter', function() {

    return function(array, limit, first) {
      first = (first !== undefined)?first:0;
      if (typeof limit === 'number' && typeof first === 'number') {
        for (var idx = first; idx<=limit; idx++) {
          array.push(idx);
        }
      }
    
      return array;
    }
  });


