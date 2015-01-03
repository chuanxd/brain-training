var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	compass = require('gulp-compass'),
	webserver = require('gulp-webserver');

//PATH
var paths = {
	css: './css/**/*.css',
	scss: './css/**/*.scss'
}

gulp.task('minify-css', function() {
  	gulp.src(paths.css)
	    .pipe(minifyCSS({keepBreaks:true}))
	    .pipe(gulp.dest('./dist/'))
});

gulp.task('compass', function() {
  	gulp.src(paths.scss)
  		.pipe(compass({
      	// config_file: './config.rb',
      		css: 'css',
      		sass: 'css'
    	}))
    	.pipe(minifyCSS())
    	.pipe(gulp.dest('./css/'))
});

gulp.task('webserver', function() {
  	gulp.src('./')
    	.pipe(webserver({
      		livereload: true,
      		directoryListing: true,
      		open: true
    	}));
});

gulp.task('default', ['compass', 'webserver'], function () {
	//watch SCSS and compile scss
	gulp.watch(paths.scss, ['compass']);
});