# Type

This Project adds better type checking from basic JS types.

## Usage:

Type supports 12 primitive JS Types: Null, Boolean, Number, Integer, Float, Infinity, NaN, String, Array, Object, Set and Map.

Any value can be checked against those types:

```javascript
const Type = require('@philipp122/Type');

// True
console.log(null instanceof Type.Null);

// True
console.log(NaN instanceof Type.Number);

// False
console.log(NaN instanceof Type.Integer);
```

See index.test.js for more examples.