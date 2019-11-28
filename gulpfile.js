const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function scripts() {
	return gulp.src('app/main.js')
	.pipe(browserSync.stream());
};

function watch() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})

	gulp.watch('app/**/*.js', scripts)
	gulp.watch('app/index.html').on('change', browserSync.reload)
}
exports.scripts = scripts;
exports.watch = watch;