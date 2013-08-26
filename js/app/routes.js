define(function() {
  'use strict';

  // The routes for the application. This module returns a function.
  // `match` is match method of the Router
  return function(match) {
      match('', 'main#index');
      match('Home', 'main#index');
      match('Weather', 'weather#index');

      // movie search
      match('@:Search/:query', 'movie#search');
      match('@:Search/:query/p:page', 'movie#search')
  };
});
