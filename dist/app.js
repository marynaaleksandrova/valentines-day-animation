$(document).ready(function () {

  var query = window.location.search.substr(1);
  var queryParamsTokens = query.split('&');
  var queryParams = queryParamsTokens.reduce(function (params, token) {
    var ts = token.split('=');
    params[ts[0]] = ts[1];
    return params;
  }, {});


  if (!queryParams.fpSex || !queryParams.spSex) {
    window.location.pathname = '/valentine-card/create.html';
  }


  var link = "mailto:?subject=Happy Valentine's Day!&body=Card for you " + encodeURIComponent(window.location.href);
  $('#share-via-email').attr('href', link);

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


  var $ballon = $('#final');

  $firstPerson.addClass(firstPersonSex);
  $secondPerson.addClass(secondPersonSex);


  if (firstPersonSex === 'male') {
    $firstPersonBody.append($('#boy-to-right-top').clone());
    $firstPersonLeg1.append($('#boy-to-right-legs').clone());
    $firstPersonLeg2.append($('#boy-to-right-legs').clone());
    $firstPersonHand.append($('#boy-to-right-hands').clone());

    $firstPersonBody.find('svg').svg(function () {
      var svg = $firstPersonBody.find('svg').svg('get');
      $('#hair-boy-to-right', svg.root()).attr('fill', '#' + queryParams.fpHair);
      $('#skin-boy-to-right-head', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });

    $firstPersonHand.find('svg').svg(function () {
      var svg = $firstPersonHand.find('svg').svg('get');
      $('#skin-boy-to-right-hands', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });

  }

  if (secondPersonSex === 'male') {
    $secondPersonBody.append($('#boy-to-left-top').clone());
    $secondPersonLeg1.append($('#boy-to-left-legs').clone());
    $secondPersonLeg2.append($('#boy-to-left-legs').clone());
    $secondPersonHand.append($('#boy-to-left-hands').clone());

    $secondPersonBody.find('svg').svg(function () {
      var svg = $secondPersonBody.find('svg').svg('get');
      $('#hair-boy-to-left', svg.root()).attr('fill', '#' + queryParams.spHair);
      $('#skin-boy-to-left-head', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });

    $secondPersonHand.find('svg').svg(function () {
      var svg = $secondPersonHand.find('svg').svg('get');
      $('#skin-boy-to-left-hands', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });
  }

  if (firstPersonSex === 'female') {
    $firstPersonBody.append($('#girl-to-right-top').clone());
    $firstPersonLeg1.append($('#girl-to-right-legs').clone());
    $firstPersonLeg2.append($('#girl-to-right-legs').clone());
    $firstPersonHand.append($('#girl-to-right-hands').clone());

    $firstPersonBody.find('svg').svg(function () {
      var svg = $firstPersonBody.find('svg').svg('get');
      $('#hair-girl-to-right', svg.root()).attr('fill', '#' + queryParams.fpHair);
      $('#skin-girl-to-right-head', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#skin-girl-to-right-neck', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });
    $firstPersonLeg1.find('svg').svg(function () {
      var svg = $firstPersonLeg1.find('svg').svg('get');
      $('#skin-girl-to-right-leg', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });
    $firstPersonLeg2.find('svg').svg(function () {
      var svg = $firstPersonLeg2.find('svg').svg('get');
      $('#skin-girl-to-right-leg', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });

    $firstPersonHand.find('svg').svg(function () {
      var svg = $firstPersonHand.find('svg').svg('get');
      $('#skin-girl-to-right-hands', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });

  }

  if (secondPersonSex === 'female') {
    $secondPersonBody.append($('#girl-to-left-top').clone());
    $secondPersonLeg1.append($('#girl-to-left-legs').clone());
    $secondPersonLeg2.append($('#girl-to-left-legs').clone());
    $secondPersonHand.append($('#girl-to-left-hands').clone());

    $secondPersonBody.find('svg').svg(function () {
      var svg = $secondPersonBody.find('svg').svg('get');
      $('#hair-girl-to-left', svg.root()).attr('fill', '#' + queryParams.spHair);
      $('#skin-girl-to-left-head', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#skin-girl-to-left-head', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });

    $secondPersonHand.find('svg').svg(function () {
      var svg = $secondPersonHand.find('svg').svg('get');
      $('#skin-girl-to-left-hands', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });
    $secondPersonLeg1.find('svg').svg(function () {
      var svg = $secondPersonLeg1.find('svg').svg('get');
      $('#skin-girl-to-left-legs', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });
    $secondPersonLeg2.find('svg').svg(function () {
      var svg = $secondPersonLeg2.find('svg').svg('get');
      $('#skin-girl-to-left-legs', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });
  }

  if (firstPersonSex === 'male' && secondPersonSex === 'male') {
    $ballon.append($('#b-b').clone());
    $ballon.find('svg').svg(function () {
      var svg = $ballon.find('svg').svg('get');
      $('#baloon-hair-boy-to-right', svg.root()).attr('fill', '#' + queryParams.fpHair);
      $('#baloon-hair-boy-to-left', svg.root()).attr('fill', '#' + queryParams.spHair);

      $('#baloon-skin-boy-to-right-skin', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-boy-to-right', svg.root()).attr('fill', '#' + queryParams.fpSkin);

      $('#baloon-skin-boy-to-left-skin', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-boy-to-left', svg.root()).attr('fill', '#' + queryParams.spSkin);

    });
  } else if (firstPersonSex === 'male' && secondPersonSex === 'female') {
    $ballon.append($('#b-g').clone());
    $ballon.find('svg').svg(function () {
      var svg = $ballon.find('svg').svg('get');
      $('#baloon-hair-boy-to-right', svg.root()).attr('fill', '#' + queryParams.fpHair);
      $('#baloon-hair-girl-to-left', svg.root()).attr('fill', '#' + queryParams.spHair);

      $('#baloon-skin-boy-to-right-head', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-girl-to-left-neck', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-girl-to-left-head', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-girl-to-left-hand', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-boy-to-right-hand', svg.root()).attr('fill', '#' + queryParams.fpSkin);
    });
  } else if (firstPersonSex === 'female' && secondPersonSex === 'male') {
    $ballon.append($('#g-b').clone());
    $ballon.find('svg').svg(function () {
      var svg = $ballon.find('svg').svg('get');
      $('#baloon-hair-girl-to-right', svg.root()).attr('fill', '#' + queryParams.fpHair);
      $('#baloon-hair-boy-to-left', svg.root()).attr('fill', '#' + queryParams.spHair);

      $('#baloon-skin-girl-to-right-neck', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-girl-to-right-head', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-boy-to-left', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-girl-to-right-hand', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-boy-to-left-hand', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });

  } else if (firstPersonSex === 'female' && secondPersonSex === 'female') {
    $ballon.append($('#g-g').clone());
    $ballon.find('svg').svg(function () {
      var svg = $ballon.find('svg').svg('get');
      $('#baloon-hair-girl-to-right', svg.root()).attr('fill', '#' + queryParams.fpHair);
      $('#baloon-hair-girl-to-left', svg.root()).attr('fill', '#' + queryParams.spHair);

      $('#baloon-skin-girl-to-right-neck', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-girl-to-right-head', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-girl-to-left-neck', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-girl-to-left-head', svg.root()).attr('fill', '#' + queryParams.spSkin);
      $('#baloon-skin-girl-to-right-hand', svg.root()).attr('fill', '#' + queryParams.fpSkin);
      $('#baloon-skin-girl-to-left-hand', svg.root()).attr('fill', '#' + queryParams.spSkin);
    });
  }


  $("#start-animation").on("click", function(){
    $("html").removeClass("loading").addClass("loaded");
    // $("#wrapper").show();
    $firstPerson.addClass('started');
    $firstPersonLeg1.addClass('started');
    $firstPersonLeg2.addClass('started');
    $firstPersonHand.addClass('started');
    $secondPerson.addClass('started');
    $secondPersonLeg1.addClass('started');
    $secondPersonLeg2.addClass('started');
    $secondPersonHand.addClass('started');
    $ballon.addClass('started');

    $('#valentine_ball').addClass('started');
    $('#first_person_ball').addClass('started');
    $('#second_person_ball').addClass('started');
    $('#full_system img#flask').addClass('started');
    $('img#fire').addClass('started');
    $('div#fire_stand').addClass('started');
    $('#full_system div.clamp').addClass('started');
    $("audio").get(0).play()
   });

  // being lazy here
  // start after 1 sec instead of waiting for all svgs to load
  setTimeout(function () {

  }, 1000);
});