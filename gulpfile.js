/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");

var paths = {
    root: "./"
};

paths.js = paths.root + "src/**/*.js";
paths.minJs = paths.root + "dist/**/*.min.js";
paths.concatJsDest = paths.root + "dist/jquery.lwtCountdown-1.0.min.js";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean", ["clean:js"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js"]);