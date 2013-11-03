



app.controller('ReportingController', function ($scope, reportingModel)
{
  // necessary variables to work with our pagination system
  $scope.resultsPerPage = [10, 20, 30];
  $scope.selectedResultsPerPage =  $scope.resultsPerPage[0];
  $scope.currentPage = 0;
  $scope.totalPages = 0;
  $scope.page = [];  // countries that will be shown in the page
  
  // add the countries to the scope
  $scope.countries = reportingModel.countries;

  // method to be called from the view to change the current page
  $scope.setPage = function(page) {
    $scope.currentPage = page;
  };
  
  // method to be called from the view to change the current number of elements per page
  $scope.setResultsPerPage = function(page) {
    $scope.selectedResultsPerPage = page;
  };

  // LISTENERS
  // if the list of countries are updated, the number of pages is also updated
  $scope.$watch('countries', function() {
    refreshTotalPages();
  });
  
  // when the current page changes, we have to refresh the list of shown countries
  $scope.$watch('currentPage', function() {
    refreshPage();
  });
  
  // when the current page changes, we have to refresh the list of shown countries
  $scope.$watch('selectedResultsPerPage', function() {
    refreshTotalPages();
  });
  
  // if the total of pages changes and we are out of range, we will be moved to the last one
  $scope.$watch('totalPages', function(value) {
    if ($scope.currentPage>value) {
      $scope.currentPage = value;
    } else {
      refreshPage();
    }
  });

  // PRIVATE FUNCTIONS
  // redraw the list of countries
  var refreshPage = function() {
    var first = $scope.currentPage*$scope.selectedResultsPerPage;
    var last = first + $scope.selectedResultsPerPage;

    $scope.page = $scope.countries.slice(first, last);
  };

  // the number of countries or the number of results per page have changed
  var refreshTotalPages = function() {
    $scope.totalPages = Math.floor($scope.countries.length/$scope.selectedResultsPerPage);
  };

});




