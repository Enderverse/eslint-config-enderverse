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
	plugins: [ 'security' ],
	rules: {
		'security/detect-buffer-noassert': 'warn',
		'security/detect-child-process': 'error',
		'security/detect-disable-mustache-escape': 'warn',
		'security/detect-eval-with-expression': 'error',
		'security/detect-new-buffer': 'warn',
		'security/detect-no-csrf-before-method-override': 'warn',
		'security/detect-non-literal-fs-filename': 'warn',
		'security/detect-non-literal-regexp': 'warn',
		'security/detect-non-literal-require': 'warn',
		'security/detect-object-injection': 'warn',
		'security/detect-possible-timing-attacks': 'warn',
		'security/detect-pseudoRandomBytes': 'warn',
		'security/detect-unsafe-regex': 'warn'
	}
};
