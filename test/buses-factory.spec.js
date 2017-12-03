describe('buses factory', function() {
  var Buses;

  beforeEach(angular.mock.module('busApp'));

  beforeEach(inject(function(_Buses_){
    Buses = _Buses_;
  }));

  it('should exists', function() {
    expect(Buses).toBeDefined();
  });
});