
/* Filter to show a list of natural numbers */
angular.module('assignment.filters', [])
  .filter('RangeFilter', function() {

    return function(array, limit) {
      if (typeof limit === 'number') {
        for (var idx = 0; idx<=limit; idx++) {
          array.push(idx);
        }
      }
    
      return array;
    }
  });


