const Type = require('./index');

describe('Testing Null', () => {
	test('null instanceof Type.Null should return true', () => {
		expect(null instanceof Type.Null).toBeTruthy();
	});
});

describe('Testing Boolean', () => {
	test('true instanceof Type.Boolean should return true', () => {
		expect(true instanceof Type.Boolean).toBeTruthy();
	});

	test('false instanceof Type.Boolean should return true', () => {
		expect(false instanceof Type.Boolean).toBeTruthy();
	});
});

describe('Testing Number', () => {
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

describe('Testing String', () => {
	test('Strings instanceof Type.String should return true', () => {
		expect("Hello World" instanceof Type.String).toBeTruthy();
	});
});

describe('Testing Array', () => {
	test('Arrays instanceof Type.Array should return true', () => {
		expect([1, 2, 3] instanceof Type.Array).toBeTruthy();
	});
});

describe('Testing Object', () => {
	test('Objects instanceof Type.Object should return true', () => {
		expect({a: 1, b: 2} instanceof Type.Object).toBeTruthy();
	});
});

describe('Testing Set', () => {
	test('Sets instanceof Type.Set should return true', () => {
		expect(new Set([1, 2, 3]) instanceof Type.Set).toBeTruthy();
	});
});

describe('Testing Map', () => {
	test('Maps instanceof Type.Map should return true', () => {
		expect(new Map().set('a', 1).set('b', 2) instanceof Type.Map).toBeTruthy();
	});
});