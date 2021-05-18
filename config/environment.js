'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'empress-blog-casper',
    environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    blog: {
      title: 'Saratoga Senior Magazine 2021',
      description: 'A tribute to Saratoga High School\'s Class of 2021',
      coverImage: '/images/blog-cover.jpg',

      navigation: [
      {
        label: 'Home',
        route: 'index'
      },
      {
        label: 'Profiles',
        route: 'tag',
	id: 'profiles'
      },
      {
        label: 'Columns',
        route: 'tag',
	id: 'columns'
      },
      {
        label: 'Photos',
        route: 'page',
	id: 'photos'
      },
      {
        label: 'Next Ups',
        route: 'page',
	id: 'next-ups'
      },
      {
        label: 'Farewells',
        route: 'tag',
	id: 'farewells'
      },
      {
        label: 'College Map',
        route: 'page',
	id: 'college-map'
      },
      {
        label: 'Senior Wills',
        route: 'page',
	id: 'senior-wills'
      },
      ]
    },

    'responsive-image': {
      sourceDir: 'images',
      destinationDir: 'responsive-images',
      quality: 80,
      supportedWidths: [2000, 1000, 600, 300],
      removeSourceDir: false,
      justCopy: false,
      extensions: ['jpg', 'jpeg', 'png', 'gif']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
