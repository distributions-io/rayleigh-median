/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	median = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array median', function tests() {

	it( 'should export a function', function test() {
		expect( median ).to.be.a( 'function' );
	});

	it( 'should compute the distribution median', function test() {
		var sigma, actual, expected;

		sigma = [ 0.5, 1, 2, 4 ];
		actual = new Array( sigma.length );

		actual = median( actual, sigma );
		expected = [ 0.588705, 1.177410, 2.354820, 4.709640 ];

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( median( [], [] ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [ true, null, [], {} ];
		actual = new Array( data.length );
		actual = median( actual, data );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );
	});

});
