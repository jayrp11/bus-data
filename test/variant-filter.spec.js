describe('formatVariant filter', function() {
  var $filter;

  beforeEach(angular.mock.module('busApp'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns Unknown when given null', function() {
    var formatVariant = $filter('formatVariant');
    expect(formatVariant(null)).toEqual(null);
  });

  it('returns formated value when given string', function() {
    var formatVariant = $filter('formatVariant');
    expect(formatVariant('123 1 1')).toEqual('<strong>123</strong> 1 1');
  });
});