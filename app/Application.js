



var app = angular.module( "assignment", [ ] );

/* The factory creates the various models for the application */
app.factory('reportingModel', function()
{
    return new ReportingModel();
});


/*
 * This configures the routes and associates each route with a view and a controller
 */
app.config(function ($routeProvider)
{
    $routeProvider
        .when('/reporting',
        {
            controller: 'ReportingController',
            templateUrl: 'app/templates/reporting.html'
        })
        .otherwise({ redirectTo: '/reporting' });
});






