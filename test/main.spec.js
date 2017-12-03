describe('formatVariant filter', function() {
  var $filter;

  beforeEach(angular.mock.module('busApp'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns Unknown when given null', function() {
    var formatVariant = $filter('formatVariant');
    expect(formatVariant(null)).toEqual(null);
    expect(formatVariant('123 1 1')).toEqual('<strong>123</strong> 1 1');
  });
});

describe('formatStatus filter', function() {
  var $filter;

  beforeEach(angular.mock.module('busApp'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns Unknown when given null', function() {
    var formatStatus = $filter('formatStatus');
    expect(formatStatus(null)).toEqual('Unknown');
    expect(formatStatus('70')).toEqual("<span class='ontime'>On Time</span>");
    expect(formatStatus('301')).toEqual("<span class='late'>Late</span>");
    expect(formatStatus('-1')).toEqual("<span class='early'>Early</span>");
  });
});