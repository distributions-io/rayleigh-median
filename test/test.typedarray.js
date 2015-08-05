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

describe( 'typed-array median', function tests() {

	it( 'should export a function', function test() {
		expect( median ).to.be.a( 'function' );
	});

	it( 'should compute the distribution median', function test() {
		var sigma, actual, expected;

		sigma = new Float64Array( [ 0.5, 1, 2, 4  ] );
		actual = new Float64Array( sigma.length );

		actual = median( actual, sigma );
		expected = new Float64Array( [ 0.588705, 1.177410, 2.354820, 4.709640 ] );

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( median( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
