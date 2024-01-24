//@ts-nocheck
import pkg from "gulp";
const { src, dest, series, parallel, watch } = pkg;
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import ejs from "gulp-ejs";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import rename from "gulp-rename";
import connect from "gulp-connect";

const compileEjs = () => {
  return src("./src/templates/**/*.ejs")
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(dest("./dist/"))
    .pipe(connect.reload());
};

const compileSass = () => {
  return src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/css"))
    .pipe(connect.reload());
};

const imageCompress = () => {
  return src("./src/img/**/*")
    .pipe(
      imagemin(
        [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.7], speed: 1 }),
          imagemin.svgo(),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest("./dist/img/"));
};

const watchFile = () => {
  watch("src/scss/**/*.scss", compileSass);
  watch("src/templates/**/*.ejs", compileEjs);
  watch("src/img/**/*", imageCompress);
};

const startServer = () => {
  connect.server({
    root: "dist",
    livereload: true,
    port: 8080,
  });
};

export default series(
  compileEjs,
  compileSass,
  imageCompress,
  parallel(startServer, watchFile)
);

// parallel() 同時に処理を行う
