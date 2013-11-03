describe("RangeFilter", function() {
  var RangeFilter;
  
  beforeEach(module('assignment.filters'));

  beforeEach(inject(function ($filter) {
    RangeFilter = $filter('RangeFilter');
  }));

  it("creates a list of numbers from 0 to 4", function() {
    var result = RangeFilter([], 4);
    
    expect(result.length).toEqual(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

});