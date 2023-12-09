const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/css'))
}

function minifyImage() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function minifyHtml() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: 'true'
        }))
        .pipe(gulp.dest('./dist'))
}

exports.default = gulp.parallel(minifyImage, styles, minifyHtml);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/*.html', gulp.parallel(minifyHtml))
}