'use strict';

const alexa = require ('alexa-app')
  ;

var app = null;

function getInstance (name) {
  if (app)
    return app;

  app = new alexa.app (name);
  return app;
}

var exports = module.exports = getInstance;

Object.defineProperty (exports, 'app', {
  get: function () {
    return app;
  }
});

