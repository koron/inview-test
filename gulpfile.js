var gulp = require('gulp')
var webserver = require('gulp-webserver')

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});
