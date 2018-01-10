var _ = require('lodash');
var $ = require('jquery');

$(document).ready(function() {
  _.forEach([1,2,3], console.log(1,2,3));
  $('body').append($('<div>Hello world 123</div>'));
});
