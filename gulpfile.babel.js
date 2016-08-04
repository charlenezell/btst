import gulp from 'gulp';
// import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
// import rename from "gulp-rename";
import browserify from "browserify";
import plumber from "gulp-plumber";

// import livereload from "gulp-livereload";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import babelify from "babelify";
import livereload from "gulp-livereload";

export function script() {
 var b=browserify({
   standalone :"btst",
   entries:'./main.es6',
   debug:true
 })
 .transform(babelify);
 return b.bundle()
          .pipe(source('main.js'))
          .pipe(buffer())
          // .pipe(eslint())
          // .pipe(eslint.format())
          .pipe(uglify())
          .pipe(gulp.dest("./"))
          .pipe(livereload());
}

export function watch() {
  livereload.listen();
  gulp.watch(["./core/**/*.es6","./plugins/**/*.es6","./main.es6","./test/**/*.*"], script);
}

const build = gulp.series(script,watch);

export {
  build
};

export default build;
