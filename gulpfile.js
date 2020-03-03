var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concatCss = require('gulp-concat-css');
var cleanCss = require('gulp-clean-css');
var uncss = require('gulp-uncss');


gulp.task('serve',['css'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["./*.html", "./css/*.css", ['css']]).on('change', browserSync.reload);
});

gulp.task('css', () => {
    return gulp.src(['./css/skeleton.css','./css/normalize.css','./css/main.css'])
        .pipe(concatCss("bundle.css"))
        .pipe(uncss({html: ['index.html']}))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['serve']);