'use strict';

var gulp       	 = require('gulp');
var browserSync	 = require('browser-sync').create();
var sass       	 = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var rigger       = require('gulp-rigger');
const babel      = require('gulp-babel');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify-es').default;

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src('js/main.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify(/* options */))
        .pipe(rename({
            suffix: ".min"
          }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
})

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', 'js', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", gulp.parallel('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/**/*.js").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));