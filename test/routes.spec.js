describe('Testing Routes', function () {
  beforeEach(module('busApp'));

  it('should test routes', inject(function ($route) {
    expect($route.routes['/'].controller).toBe('BusesController as busesCtrl');
    expect($route.routes['/'].templateUrl).toEqual('./partials/buseslist.html');

    expect($route.routes[null].redirectTo).toEqual('/');
  }));
});