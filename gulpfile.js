
var gulp = require('gulp'),
    gulpZip = require('gulp-zip'),
    del = require('del');

var files = [
  'icons/*.png',
  'src/*.js',
  'LICENSE.md',
  'README.md',
  'manifest.json'
];
var manifest = require('./manifest.json');
var name = 'custom-keyboard-shortcuts';
var packageName = name + '-' + manifest.version;

gulp.task('clean', function() {
  del('dist/' + packageName);
});

// For packing via chrome --pack-extension.
gulp.task('dist', ['clean'], function() {
    gulp.src(files, { base: '.' })
        .pipe(gulp.dest('dist/' + packageName));
});

// For uploading to Google Developer Dashboard
gulp.task('dist-zip', function() {
  gulp.src(files, { base: '.' })
      .pipe(gulpZip('dist/' + packageName + '.zip'))
      .pipe(gulp.dest('.'));
});

gulp.task('default', ['dist-zip']);

