module.exports = {
	verbose: true,
	preset: 'jest-preset-angular',
	globals: {
		'ts-jest': {
			tsConfig: './projects/weather-app/tsconfig.spec.json'
		}
	}
};
