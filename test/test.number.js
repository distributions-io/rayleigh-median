/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	median = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number median', function tests() {

	it( 'should export a function', function test() {
		expect( median ).to.be.a( 'function' );
	});

	it( 'should compute the distribution median', function test() {
		assert.closeTo( median( 0.5 ), 0.588705, 1e-5 );
		assert.closeTo( median( 1  ), 1.177410, 1e-5 );
		assert.closeTo( median( 2  ), 2.354820, 1e-5 );
		assert.closeTo( median( 4  ), 4.709640, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter sigma', function test() {
		assert.isTrue( isnan( median( -1 ) ) );
	});

});
