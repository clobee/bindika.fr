var gulp = require("gulp");
var watch = require("gulp-watch");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer'); //https://www.npmjs.org/package/gulp-autoprefixer
var minifycss = require('gulp-minify-css'); //https://www.npmjs.org/package/gulp-minify-css
var exec = require("child_process").exec;

// var run = require('gulp-run');
// var less = require('gulp-less');
// var browserSync = require('browser-sync').create();

// gulp.task("default", function() {
//     // Run local server, open localhost:8000 in your browser
//     // exec("php -S localhost:8000 -t output");

//     // Generate current version
//     // For Windows use: exec('vendor\\bin\\statie generate', function (err, stdout, stderr) {
//     exec("./vendor/bin/statie generate source", function(err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
//     });

//     return (
//         watch(["source/**/*", "!**/*___jb_tmp___"], { ignoreInitial: false })
//         // For the second arg see: https://github.com/floatdrop/gulp-watch/issues/242#issuecomment-230209702
//             .on("change", function() {
//                 // For Windows use: exec('vendor\\bin\\statie generate', function (err, stdout, stderr) {
//                 exec("./vendor/bin/statie generate source", function(
//                     err,
//                     stdout,
//                     stderr
//                 ) {
//                     console.log(stdout);
//                     console.log(stderr);
//                 });
//             })
//     );
// });





function styles() {
  return gulp.src('source/styles/styles.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('output/css'))
    // .pipe(browserSync.stream());
};

function generate() {
  // return run('vendor/bin/statie generate').exec();

    // Generate current version
    // For Windows use: exec('vendor\\bin\\statie generate', function (err, stdout, stderr) {
      exec("./vendor/bin/statie generate source", function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
};

function watch() {
  return (
    watch(["source/**/*", "!**/*___jb_tmp___"], { ignoreInitial: false })
  // For the second arg see: https://github.com/floatdrop/gulp-watch/issues/242#issuecomment-230209702
      .on("change", function() {
          // For Windows use: exec('vendor\\bin\\statie generate', function (err, stdout, stderr) {
          exec("./vendor/bin/statie generate source", function(
              err,
              stdout,
              stderr
          ) {
              console.log(stdout);
              console.log(stderr);
          });
      })
  );
}

// function reload(done) {
//   browserSync.reload();
//   done();
// }

//






gulp.task('default', gulp.parallel(
  styles,
  generate
));


