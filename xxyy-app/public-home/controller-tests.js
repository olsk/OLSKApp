/*!
 * xxyy-sample
 * Copyright(c) 2018 Rosano Coutinho
 * MIT Licensed
 */

var assert = require('assert');

var homeController = require('./controller');

describe('OLSKControllerRoutes', function testOLSKControllerRoutes () {
	
	it('returns route objects', function () {
		assert.deepEqual(homeController.OLSKControllerRoutes(), {
			XXYYRouteHome: {
				OLSKRoutePath: '/',
				OLSKRouteMethod: 'get',
				OLSKRouteFunction: homeController.index,
				OLSKRouteLanguages: ['en', 'fr'],
			},
		});
	});

});
