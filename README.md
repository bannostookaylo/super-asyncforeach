# super-asyncforeach
An asyncForEach method with some handy feature such as break and redo

```javascript
const asyncForEach = require('super-asyncforeach');

let values = [1,2,3,4,5];

await asyncForEach(values, async ( value, index, array ) => {
});

```
## Special Returns
### Break
> Allows the user to break out of the foreach loop
```javascript
let values = [1,2,3,4,5];

await asyncForEach(values, async ( value, index, array ) => {

	if ( value === 3 ) {
		return 'break';
	}
	
});
```
### Redo
> Allows the user to repeat an index if necessary 
```javascript
let values = [1,2,3,4,5];
let redo = 1;

await asyncForEach(values, async ( value, index, array ) => {

	console.log( value );

	if	( redo === 1 && value === 2 )	{

		redo = 2;
		return 'redo';

	}
	
});
```
