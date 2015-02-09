var query = window.location.search.substr(1);
var queryParamsTokens = query.split('&');
var queryParams = queryParamsTokens.map(function (token) {
  var ts = token.split('=');
  var param = {};
  param[ts[0]] = ts[1];
  return param;
});