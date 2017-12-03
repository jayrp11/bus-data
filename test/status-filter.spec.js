describe('formatStatus filter', function() {
  var $filter;

  beforeEach(angular.mock.module('busApp'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns Unknown when given null', function() {
    var formatStatus = $filter('formatStatus');
    expect(formatStatus(null)).toEqual('Unknown');
  });

  it('returns OnTime when given < 300 and > 0', function() {
    var formatStatus = $filter('formatStatus');
    expect(formatStatus('70')).toEqual("<span class='ontime'>On Time</span>");
  });

  it('returns Late when given > 300', function() {
    var formatStatus = $filter('formatStatus');
    expect(formatStatus('301')).toEqual("<span class='late'>Late</span>");
  });

  it('returns Early when given < 0', function() {
    var formatStatus = $filter('formatStatus');
    expect(formatStatus('-1')).toEqual("<span class='early'>Early</span>");
  });
});