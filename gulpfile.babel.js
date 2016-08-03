import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from "gulp-rename";
import browserify from "browserify";
import plumber from "gulp-plumber";
import eslint from "gulp-eslint";
import livereload from "gulp-livereload";
import source from "vinyl-source-stream";

function doPipe(st) {
  return st.pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    // .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(uglify())
    .pipe(plumber.stop())
    // .pipe(rename(function(path){

    //   // console.log(path);
    //   // path.basename = "common";
    //   // path.extname = ".md"
    // }))
}

export function script() {
 var b=browserify({
   entries:'./main.es6',
   debug:true
 })
 return b.bundle()
          .pipe(source('main.js'))
}

export function watch() {
  livereload.listen();
  gulp.watch(["./core/**/*.es6","./plugins/**/*.es6"], script);
  // gulp.watch(["./doudougamesidebar/main.es6"], script_doudougamesidebar);
}

const build = gulp.series(scripts,watch);

export {
  build
};

export default build;
