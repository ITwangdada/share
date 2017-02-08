'use strict';
var http = require("http");
var url = require('url');
var formidable = require('formidable');
var util = require('util');
function start(router, handle) {
  http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received');
    router(handle, pathname, response, request);
  }).listen(8888);
}

exports.start = start;