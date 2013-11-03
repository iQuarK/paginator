describe("ReportingModel", function() {

  beforeEach(module('assignment'));

  it("The list of countries is not empty", inject(function(reportingModel) {
    expect(reportingModel.countries).toBeDefined();
    expect(reportingModel.countries.length).toEqual(89);
  }));
  
  it("The field 'views' was successfully added.", inject(function(reportingModel) {
    expect(reportingModel.countries[0].views).toBeDefined();
  }));

});