angular.module('resign').controller('MainCtrl', function($scope, $window) {
  'use strict';
  $scope.name = '';
  $scope.membership = '';
  $scope.birth = '';
  $scope.state = '';
  $scope.bishopname = '';
  $scope.bishopmailaddress = '';
  $scope.stakepresname = '';
  $scope.stakepresmailaddress = '';
  var watchlist = "[ " +
    "name, membership, birth, " +
    "state, bishopname, bishopmailaddress, " +
    "stakepresname, stakepresmailaddress " +
    "]";
  $scope.$watch(watchlist, function() {
    $scope.letterbody = 'Pursuant to US Supreme Court case Guinn v. ' +
      'Church of Christ of Collinsville, OK (1989), and pursuant to the ' +
      'out-of-court settlement resulting from the lawsuit of Norman Hancock ' +
      '(Mesa, AZ, 1985) against the Church, this letter is my resignation from ' +
      'the Church of Jesus Christ of Latter-Day Saints (herein referred to ' +
      'as “the Church”) together with resignation from all the Church’s affiliated ' +
      'corporations and organizations, and any and all so-called genealogical and ' +
      'family history records kept by the Church. It shall be effective immediately ' +
      'upon receipt. The terms “excommunicated,” “disfellowshipped,” or ' +
      '“name removed,” or any other term or annotation, shall not be used in ' +
      'conjunction with or next to my name in anyway in any records of the Church, ' +
      'its corporations, or its affiliates anywhere; my name shall be removed from ' +
      'all of your records without annotation or note of any kind and without any ' +
      'waiting periods whatsoever, either as prescribed in your General Handbook of ' +
      'Instructions or as presumed to be necessary by any of you.' +
      '\n\n' +
      'This name removal shall be handled with full confidentiality and shall not ' +
      'be made known to any members of my family, friends, acquaintances, or any ' +
      'local members or local leaders in any of the Church congregations, except ' +
      'for you specifically, ' +
      $scope.bishopname +
      ', and you specifically, ' +
      $scope.stakepresname +
      ', and the Church headquarters member records personnel only. It shall not ' +
      'be made known to any counselors within any of your bishoprics or ' +
      'presidencies, or any other individuals within the Church leadership, ' +
      'neither Stake or Ward Priesthood Executive Committees, or Ward Councils or ' +
      'any other groups or individuals. Without the confidentiality just described, ' +
      'defamation of character as either libel or slander will be presumed, and I ' +
      'shall take legal action against both of you personally and against the ' +
      'Church collectively as a corporation.' +
      '\n\n' +
      'Failure to comply with the mandates herein described shall be considered ' +
      'actionable under the precedents stated above and under the laws of the ' +
      'United States and the State of ' +
      $scope.state +
      ', including, but not limited ' +
      'to, defamation of character, harassment, and violation of First Amendment ' +
      'rights. This mandated name removal shall include all genealogical and ' +
      'family history records where my name is currently linked to church records ' +
      'of any kind, including birth, baptismal, priesthood ordinations, and ' +
      'ordinances within the Church. With the same vehemence the Church has ' +
      'preached record-keeping and genealogical research for eternity’s sake, ' +
      'you shall, without any delay, undertake this name removal process or face ' +
      'legal prosecution. Confirmation of my mandated name removal from all ' +
      'Church records and all Church-affiliated corporations’ or businesses’ ' +
      'records shall be given to me by standard US Postal Service to the ' +
      'address noted below.';
    $scope.letterbodyHTML = $scope.letterbody.split('\n\n');
  }, true);
});