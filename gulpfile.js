var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');

//Browserify
gulp.task('browserify', function() {
  browserify('./app/main.ts')
    .add("typings/browser.d.ts")
    .plugin(tsify)
    .bundle()
    .on("error", function (err) {console.log("ERROR: " + err.message);})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'))
});

//Watch Task
gulp.task('watch', function() {
  gulp.watch('./app/**/*.ts', ['browserify'])
});
