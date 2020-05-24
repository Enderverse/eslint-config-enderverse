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
	plugins: [ 'jsdoc' ],
	rules: {
		'jsdoc/check-access': 'error',
		'jsdoc/check-alignment': 'error',
		'jsdoc/check-examples': 'off',
		'jsdoc/check-indentation': [ 'error', { excludeTags: [ 'example' ] } ],
		'jsdoc/check-param-names': [ 'error' ],
		'jsdoc/check-property-names': 'error',
		'jsdoc/check-syntax': 'error',
		'jsdoc/check-tag-names': [ 'error', { definedTags: [ 'note' ] }],
		'jsdoc/check-types': [ 'warn' ],
		'jsdoc/check-values': [ 'warn' ],
		'jsdoc/empty-tags': [ 'error' ],
		'jsdoc/implements-on-classes': [ 'error' ],
		'jsdoc/match-description': [ 'warn' ],
		'jsdoc/newline-after-description': [ 'error', 'never' ],
		'jsdoc/no-types': 'off',
		'jsdoc/no-undefined-types': [ 'warn' ],
		'jsdoc/require-description': [ 'error', { exemptedBy: [ 'type' ] } ],
		'jsdoc/require-description-complete-sentence': [ 'error' ],
		'jsdoc/require-example': [ 'off', { exemptedBy: [ 'private', 'type' ] } ],
		'jsdoc/require-file-overview': [ 'off', { tags: { file: { initialCommentsOnly: true, mustExist: false, preventDuplicates: true } } } ],
		'jsdoc/require-hyphen-before-param-description': [ 'warn', 'always', { checkProperties: true } ],
		'jsdoc/require-jsdoc': [ 'error', { exemptEmptyFunctions: true, publicOnly: true } ],
		'jsdoc/require-param': [ 'error' ],
		'jsdoc/require-param-description': [ 'warn' ],
		'jsdoc/require-param-name': [ 'error' ],
		'jsdoc/require-param-type': [ 'error' ],
		'jsdoc/require-property-description': [ 'warn' ],
		'jsdoc/require-property-name': [ 'error' ],
		'jsdoc/require-property-type': [ 'error' ],
		'jsdoc/require-returns': [ 'error', { exemptedBy: [ 'type' ] } ],
		'jsdoc/require-returns-check': 'error',
		'jsdoc/require-returns-description': [ 'warn' ],
		'jsdoc/require-returns-type': [ 'error' ],
		'jsdoc/valid-types': [ 'warn' ]
	},
	settings: {
		jsdoc: {
			ignorePrivate: true,
			tagNamePreference: {
				'augments': 'extends',
				'const': 'const',
				'constructor': 'constructor',
				'file': 'overview',
				'fires': 'emits',
				'method': 'method'
			}
		}
	}
};
