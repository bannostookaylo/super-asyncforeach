const asyncForEach = require('../index.js');

let values = [1,2,3,4,5];
let redo = 1;

( async () => {

	await asyncForEach(values, async ( value, index ) => {

		console.log(value);

		/**
		 * Test Demo Redo
		 */
		if	( redo === 1 && value === 2 )	{

			redo = 2;
			return 'redo';

		}

		/**
		 * Test Demo Break
		 */
		if ( value === 4 ) {

			return 'break';

		}

	});

})();
