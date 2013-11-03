describe("ReportingController", function() {
  var ctrl, scope;

  beforeEach(module('assignment'));

  beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ReportingController', {
          $scope: scope
      });
  }));

  it("The countries are updated when the user changes the results per page.", inject(function(reportingModel) {
    scope.$apply();
    // it starts with 10 items per page
    expect(scope.page.length).toEqual(10);
    // 20 items per page
    scope.selectedResultsPerPage = 20;
    scope.$apply();
    expect(scope.page.length).toEqual(20);
    // 30 items per page
    scope.selectedResultsPerPage = 30;
    scope.$apply();
    expect(scope.page.length).toEqual(30);
  }));
  
  
  it("When the user changes the results per page and the user is in a page bigger than the total of pages, must be moved to the last of the current ones.", inject(function(reportingModel) {
    scope.$apply();
    // we have 10 items, and 9 pages, if the user goes to the last page
    scope.currentPage = scope.totalPages;
    scope.$apply();
    expect(scope.currentPage).toEqual(scope.totalPages);
    
    //  ...and changes the results per page to 30, it must be moved to the 3rd
    scope.selectedResultsPerPage = 30;
    scope.$apply();
    expect(scope.totalPages).toEqual(2);  // they are 3 but is counting from 0
    expect(scope.currentPage).toEqual(scope.totalPages);
  }));

});