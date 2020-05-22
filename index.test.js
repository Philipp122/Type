const Type = require('./index');

describe('Testing Primitives', () => {
	test('undefined instanceof Type.Undefined should return true', () => {
		expect(undefined instanceof Type.Undefined).toBeTruthy();
	});
	test('null instanceof Type.Null should return true', () => {
		expect(null instanceof Type.Null).toBeTruthy();
	});
	test('true instanceof Type.Boolean should return true', () => {
		expect(true instanceof Type.Boolean).toBeTruthy();
	});
	test('false instanceof Type.Boolean should return true', () => {
		expect(false instanceof Type.Boolean).toBeTruthy();
	});

	describe('Testing Numbers', () => {
		test('Integers instanceof Type.Number should return true', () => {
			expect(5 instanceof Type.Number).toBeTruthy();
		});
		test('Floats instanceof Type.Number should return true', () => {
			expect(5.5 instanceof Type.Number).toBeTruthy();
		});
		test('Infinity instanceof Type.Number should return false', () => {
			expect(Infinity instanceof Type.Number).toBeFalsy();
		});
		test('NaN instanceof Type.Number should return false', () => {
			expect(NaN instanceof Type.Number).toBeFalsy();
		});
	});
	describe('Testing Integers', () => {
		test('Integers instanceof Type.Integer should return true', () => {
			expect(5 instanceof Type.Integer).toBeTruthy();
		});

		test('Floats instanceof Type.Integer should return false', () => {
			expect(5.5 instanceof Type.Integer).toBeFalsy();
		});

		test('Infinity instanceof Type.Integer should return false', () => {
			expect(Infinity instanceof Type.Integer).toBeFalsy();
		});

		test('NaN instanceof Type.Integer should return false', () => {
			expect(NaN instanceof Type.Integer).toBeFalsy();
		});
	});
	describe('Testing Floats', () => {
		test('Integers instanceof Type.Float should return false', () => {
			expect(5 instanceof Type.Float).toBeFalsy();
		});

		test('Floats instanceof Type.Float should return true', () => {
			expect(5.5 instanceof Type.Float).toBeTruthy();
		});

		test('Infinity instanceof Type.Float should return false', () => {
			expect(Infinity instanceof Type.Float).toBeFalsy();
		});

		test('NaN instanceof Type.Float should return false', () => {
			expect(NaN instanceof Type.Float).toBeFalsy();
		});
	});
	describe('Testing Infinity', () => {
		test('Integers instanceof Type.Infinity should return false', () => {
			expect(5 instanceof Type.Infinity).toBeFalsy();
		});

		test('Floats instanceof Type.Infinity should return true', () => {
			expect(5.5 instanceof Type.Infinity).toBeFalsy();
		});

		test('Infinity instanceof Type.Infinity should return false', () => {
			expect(Infinity instanceof Type.Infinity).toBeTruthy();
		});

		test('NaN instanceof Type.Infinity should return false', () => {
			expect(NaN instanceof Type.Infinity).toBeFalsy();
		});
	});
	describe('Testing NaN', () => {
		test('Integers instanceof Type.NaN should return false', () => {
			expect(5 instanceof Type.NaN).toBeFalsy();
		});

		test('Floats instanceof Type.NaN should return true', () => {
			expect(5.5 instanceof Type.NaN).toBeFalsy();
		});

		test('Infinity instanceof Type.NaN should return false', () => {
			expect(Infinity instanceof Type.NaN).toBeFalsy();
		});

		test('NaN instanceof Type.NaN should return false', () => {
			expect(NaN instanceof Type.NaN).toBeTruthy();
		});
	});

	test('Strings instanceof Type.String should return true', () => {
		expect("Hello World" instanceof Type.String).toBeTruthy();
	});

	test('Symbols instanceof Type.Symbol should return true', () => {
		expect(Symbol('F') instanceof Type.Symbol).toBeTruthy();
	});
});

describe('Testing Containers', () => {
	test('Arrays instanceof Type.Array should return true', () => {
		expect([1, 2, 3] instanceof Type.Array).toBeTruthy();
	});
	test('Objects instanceof Type.Object should return true', () => {
		expect({a: 1, b: 2} instanceof Type.Object).toBeTruthy();
	});
	test('Sets instanceof Type.Set should return true', () => {
		expect(new Set([1, 2, 3]) instanceof Type.Set).toBeTruthy();
	});
	test('WeakSets instanceof Type.WeakSet should return true', () => {
		expect(new WeakSet() instanceof Type.WeakSet).toBeTruthy();
	});
	test('Maps instanceof Type.Map should return true', () => {
		expect(new Map().set('a', 1).set('b', 2) instanceof Type.Map).toBeTruthy();
	});
	test('WeakMaps instanceof Type.WeakMap should return true', () => {
		expect(new WeakMap() instanceof Type.WeakMap).toBeTruthy();
	});
})





