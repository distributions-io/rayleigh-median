'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var ln = Math.log,
	sqrt = Math.sqrt;


// MEDIAN //

/**
* FUNCTION median( sigma )
*	Computes the distribution median for a Rayleigh distribution with parameter sigma.
*
* @param {Number} sigma - scale parameter
* @returns {Number} distribution median
*/
function median( sigma ) {
	if ( !isPositive( sigma ) ) {
		return NaN;
	}
	return sigma * sqrt( 2 * ln( 2 ) );
} // end FUNCTION median()


// EXPORTS

module.exports =  median;
