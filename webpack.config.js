// webpack.config.js
var Encore = require('@symfony/webpack-encore');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('./build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .addEntry('timeline', './react-app/index.js')




    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    // .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()

    // allow sass/scss files to be processed
    // .enableSassLoader()

    .configureBabel(function (babelConfig) {
        // add additional presets
        babelConfig.presets.push(['env', 'react']);

        // no plugins are added by default, but you can add some
        // babelConfig.plugins.push('styled-jsx/babel');
    })

    .addPlugin((
        new webpack.optimize.UglifyJsPlugin({
            parallel: true
        })
    ))


    .enableReactPreset()

;

// export the final configuration
module.exports = Encore.getWebpackConfig();