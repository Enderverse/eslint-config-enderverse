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
	plugins: [ 'unicorn' ],
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'always' ],
		'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
		'capitalized-comments': 'off',
		'curly': [ 'warn', 'multi-line' ],
		'func-names': [ 'warn', 'as-needed' ],
		'jsx-quotes': [ 'warn', 'prefer-single' ],
		'linebreak-style': [ 'warn', 'unix' ],
		'no-multiple-empty-lines': [ 'error', { 'max': 3 } ],
		'no-negated-condition': 'off',
		'object-curly-spacing': [ 'error', 'always' ],
		'padded-blocks': [ 'error', { 'blocks': 'never', 'classes': 'always', 'switches': 'never' } ],
		'quote-props': [ 'error', 'consistent' ],
		'radix': [ 'error', 'as-needed' ],
		'unicorn/filename-case': [ 'error', { 'cases': { camelCase: true, kebabCase: true, pascalCase: true } } ],
		'unicorn/no-null': 'off',
		'unicorn/prevent-abbreviations': 'off'
	}
};
