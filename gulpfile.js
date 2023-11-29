const exp = require('constants');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
function minImg() {
    return gulp.src('./src/styles/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/styles/imgs'));
}
function comprimirJs() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}
function compileSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/styles'));
}
exports.default = function() {
    gulp.watch('./src/js/*.js', {ignoreInitial: false}, gulp.series(comprimirJs))
    gulp.watch('./src/styles/main.scss', {ignoreInitial: false}, gulp.series(compileSass))
    gulp.watch('./src/styles/images/*', {ignoreInitial: false}, gulp.series(minImg))
}