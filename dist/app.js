var query = window.location.search.substr(1);
var queryParamsTokens = query.split('&');
var queryParams = queryParamsTokens.reduce(function (params, token) {
  var ts = token.split('=');
  params[ts[0]] = ts[1];
  return params;
}, {});

var firstPersonSex = queryParams.fpSex;
var secondPersonSex = queryParams.spSex;

var $firstPerson     = $('#first_person');
var $firstPersonBody = $('#first_person_body');
var $firstPersonLeg1 = $('#first_person_leg1');
var $firstPersonLeg2 = $('#first_person_leg2');
var $firstPersonHand = $('#first_person_hand');

var $secondPerson     = $('#second_person');
var $secondPersonBody = $('#second_person_body');
var $secondPersonLeg1 = $('#second_person_leg1');
var $secondPersonLeg2 = $('#second_person_leg2');
var $secondPersonHand = $('#second_person_hand');

$firstPerson.addClass(firstPersonSex);
$secondPerson.addClass(secondPersonSex);


if (firstPersonSex === 'male') {
  $firstPersonBody.attr('src', 'images/boy_body.png');
  $firstPersonLeg1.attr('src', 'images/boy_leg.png');
  $firstPersonLeg2.attr('src', 'images/boy_leg.png');
  $firstPersonHand.attr('src', 'images/boy_hand.png');
}

if (secondPersonSex === 'male') {
  $secondPersonBody.attr('src', 'images/boy_body.png');
  $secondPersonLeg1.attr('src', 'images/boy_leg.png');
  $secondPersonLeg2.attr('src', 'images/boy_leg.png');
  $secondPersonHand.attr('src', 'images/boy_hand.png');
}

if (firstPersonSex === 'female') {
  $firstPersonBody.attr('src', 'images/girl_body.png');
  $firstPersonLeg1.attr('src', 'images/girl_leg.png');
  $firstPersonLeg2.attr('src', 'images/girl_leg.png');
  $firstPersonHand.attr('src', 'images/girl_hand.png');
}

if (secondPersonSex === 'female') {
  $secondPersonBody.attr('src', 'images/girl_body.png');
  $secondPersonLeg1.attr('src', 'images/girl_leg.png');
  $secondPersonLeg2.attr('src', 'images/girl_leg.png');
  $secondPersonHand.attr('src', 'images/girl_hand.png');
}

