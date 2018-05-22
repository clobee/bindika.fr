// webpack.config.js
var Encore = require('@symfony/webpack-encore');

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('./build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .addEntry('timeline', './react-app/index.js')

    .enableReactPreset()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()



    // .createSharedEntry('vendor', [
    // .addEntry('vendor', [
    //
        // "jquery",
        // "bootstrap",

        // "./assets/js/jquery.js",
        // "./assets/js/bootstrap.min.js",
        // "./assets/js/jquery.stellar.min.js",
        // "./assets/js/text-rotate.js",
        // "./assets/js/numscroller.js",
        // "./assets/js/jquery.appear.js",
        // "./assets/js/progress-bar.min.js",
        // "./assets/js/jquery.mixitup.js",
        // "./assets/js/jquery.magnific-popup.min.js",
        // "./assets/js/magnific-popup-options.js",
        // "./assets/js/jquery.flexslider-min.js",
        //
        // "assets/js/aos.js",
        // "assets/js/app.js",
        //
        // "assets/js/main.js",
        // "./react-app/index.js"
    // ])

    //
   /// .addEntry('fixtures', [

        // "./assets/js/jquery.js",
        // // "jquery",
        // "./assets/js/bootstrap.min.js",
        //
        // "./assets/js/jquery.js",
        // "./assets/js/bootstrap.min.js",
        // "bootstrap",
        // "./assets/js/jquery.stellar.min.js",
        // "./assets/js/text-rotate.js",
        // "./assets/js/numscroller.js",
        // "./assets/js/jquery.appear.js",
        // "./assets/js/progress-bar.min.js",
        // "./assets/js/jquery.mixitup.js",
        // "./assets/js/jquery.magnific-popup.min.js",
        // "./assets/js/magnific-popup-options.js",
        // "./assets/js/jquery.flexslider-min.js",
        //
        // "assets/js/aos.js",
        // "assets/js/app.js",
        //
        // "assets/js/main.js",
        // "./react-app/index.js"
  //  ])




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

    // .configureBabel(function (babelConfig) {
    //     // add additional presets
    //     // babelConfig.presets.push(['env', 'react']);
    //     babelConfig.presets.push(['env']);
    //
    //     // no plugins are added by default, but you can add some
    //     // babelConfig.plugins.push('styled-jsx/babel');
    // })

    // .addPlugin((
    //     new webpack.optimize.UglifyJsPlugin({
    //         // parallel: true,
    //         minimize: true
    //     })
    // ))




;

// export the final configuration
module.exports = Encore.getWebpackConfig();