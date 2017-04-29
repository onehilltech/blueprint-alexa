'use strict';

const alexa   = require ('alexa-app')
  , blueprint = require ('@onehilltech/blueprint')
  , appInit   = blueprint.barrier ('app.init', 'blueprint.app')
  ;

function setupAlexa (app) {
  var config = app.configs.alexa || {};
  var appName = config.name || app.name;

  var alexaApp = alexa (appName);

  // Bind the express router to the alexa application.
  alexaApp.app.express ({expressApp: app.server.app});

  function complete () {
    appInit.signal ();
  }

  async.parallel ([
    // Load the intents.
    function (callback) {

    },

    function (callback) {
    }
  ], complete);
}

module.exports = setupAlexa;

