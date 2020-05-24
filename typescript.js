'use strict';

module.exports = {
	env: {
		es2020: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: [ '@typescript-eslint' ],
	rules: {
		'@typescript-eslint/brace-style': 'off',
		'@typescript-eslint/indent': 'off'
	}
};
