/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    mutate: [
        'src/app/**/*.js',
        '!src/app/**/__snapshots__/*.snap',
        '!src/app/**/*.test.js',
        '!src/app/**/*.styled.js',
        '!src/app/components/GlobalStyles/GlobalStyles.js'
    ],
    tempDirName: 'stryker-tmp',
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: ['babel', 'webpack'],
    timeoutMS: 10000,
    maxConcurrentTestRunners: 2,
    coverageAnalysis: 'off',
    babel: {
        optionsFile: 'babel.config.js'
    },
    webpack: {
        configFile: 'webpack.config.js'
    }
}
