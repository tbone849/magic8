var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');
var copyNodeModule = require('copy-node-modules');
var connect = require('gulp-connect');
var Server = require('karma').Server;

gulp.task('connect', function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('copyToDist', function(){
	return gulp.src('systemjs.config.js')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  	gulp.watch(['!app/**/*.spec.ts','app/**/*.ts, styles.css, index.html'], ['build']);

});

gulp.task('watchSpecs', function(){
	gulp.watch(['app/**/*.spec.ts'], ['test']);
});

gulp.task('scripts', function(){
	var tsResult = gulp.src(['!app/**/*.spec.ts','app/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(tsProject());
	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/app'))
		.pipe(connect.reload());
});

gulp.task('test', function(){
	var tsResult = gulp.src(['app/**/*.spec.ts'])
		.pipe(sourcemaps.init())
		.pipe(tsProject());
	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app'));
});

gulp.task('karma', ['test', 'watchSpecs'], function(done){
	new Server({
    configFile: require('path').resolve('karma.conf.js')
  }, done).start();
});

gulp.task('index', function(){
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	return gulp.src('styles.css')
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('copyNodeModules', function() {
  copyNodeModule('./', './dist', {devDependencies: false}, function(err, results) {
  		if (err) {
    		console.error(err);
    		return;
  		}
	});
});

gulp.task('build', ['scripts', 'copyToDist', 'index', 'css']);
gulp.task('default', ['connect', 'build', 'watch']);