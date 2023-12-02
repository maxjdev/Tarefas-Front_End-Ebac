const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileScss() {
    return gulp.src('./src/styles/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

gulp.task('default', compileScss);
