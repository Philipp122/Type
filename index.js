module.exports = {
	Undefined: class {
		static [Symbol.hasInstance](instance) {
			return instance === undefined;
		}
	},
	Null: class {
		static [Symbol.hasInstance](instance) {
			return instance === null;
		}
	},
	Boolean: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'boolean';
		}
	},
	Number: class {
		static [Symbol.hasInstance](instance) {
			return Number.isFinite(instance);
		}
	},
	Integer: class {
		static [Symbol.hasInstance](instance) {
			return Number.isSafeInteger(instance);
		}
	},
	Float: class {
		static [Symbol.hasInstance](instance) {
			return (Number.isFinite(instance) && !Number.isSafeInteger(instance));
		}
	},
	Infinity: class {
		static [Symbol.hasInstance](instance) {
			return instance === Infinity || instance === -Infinity;
		}
	},
	NaN: class {
		static [Symbol.hasInstance](instance) {
			return Number.isNaN(instance);
		}
	},
	String: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'string';
		}
	},
	Array: class {
		static [Symbol.hasInstance](instance) {
			return Array.isArray(instance);
		}
	},
	Object: class {
		static [Symbol.hasInstance](instance) {
			return Object.prototype.toString.call(instance) === '[object Object]';
		}
	},
	Symbol: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'symbol';
		}
	},
	Set: class {
		static [Symbol.hasInstance](instance) {
			return instance instanceof Set;
		}
	},
	WeakSet: class {
		static [Symbol.hasInstance](instance) {
			return instance instanceof WeakSet;
		}
	},
	Map: class {
		static [Symbol.hasInstance](instance) {
			return instance instanceof Map;
		}
	},
	WeakMap: class {
		static [Symbol.hasInstance](instance) {
			return instance instanceof WeakMap;
		}
	}
};