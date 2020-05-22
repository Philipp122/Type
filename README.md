# Type

This Project adds better type checking from basic JS types.

## Installation

```
npm install --save @philipp122/type
```

## Usage:

Type supports 14 primitive JS Types: Undefined, Null, Boolean, Number, NaN, Infinity, String, Symbol, Array, Object, WeakSet, Set, WeakMap and Map as well as 2 aliases of Number: Integer and Float.

Any value can be checked against those types:

```javascript
const Type = require('@philipp122/type');

// ALL of the following return true
console.log(undefined instanceof Type.Undefined);
console.log(null instanceof Type.Null);
console.log(true instanceof Type.Boolean);
console.log(5 instanceof Type.Number);
console.log(5 instanceof Type.Integer);
console.log(5.5 instanceof Type.Number);
console.log(5.5 instanceof Type.Float);
console.log(Infinity instanceof Type.Infinity);
console.log(NaN instanceof Type.NaN);
console.log("Hello World" instanceof Type.String);
console.log(Symbol("Bye") instanceof Type.Symbol);
console.log([1, 2, 3] instanceof Type.Array);
console.log({a: 1, b: 2} instanceof Type.Object);
console.log(new WeakSet() instanceof Type.WeakSet);
console.log(new Set() instanceof Type.Set);
console.log(new WeakMap() instanceof Type.WeakMap);
console.log(new Map() instanceof Type.Map);
```

See index.test.js for more examples.