/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	median = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor median', function tests() {

	it( 'should export a function', function test() {
		expect( median ).to.be.a( 'function' );
	});

	it( 'should compute the distribution median using an accessor', function test() {
		var sigma, actual, expected;

		sigma = [
			{'sigma':0.5},
			{'sigma':1},
			{'sigma':2},
			{'sigma':4}
		];
		actual = new Array( sigma.length );

		actual = median( actual, sigma, getValue );
		expected = [ 0.588705, 1.177410, 2.354820, 4.709640 ];

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );

		function getValue( d ) {
			return d.sigma;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( median( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var sigma, actual, expected;

		sigma = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( sigma.length );
		actual = median( actual, sigma, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
