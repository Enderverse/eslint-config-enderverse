'use strict';

module.exports = {
	env: {
		es2020: true,
		node: true
	},
	extends: [ 'xo-react' ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: [ 'react' ],
	rules: {
		'react/jsx-tag-spacing': [ 'error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' } ],
		'react/react-in-jsx-scope': 'off'
	}
};
