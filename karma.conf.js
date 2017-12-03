module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        'app/js/bundled.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'test/status-filter.spec.js',
        'test/variant-filter.spec.js',
        'test/buses-factory.spec.js',
        'test/buses-controller.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
