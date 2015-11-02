var gulp = require('gulp'),
  connect = require('gulp-connect'),
  opn = require('opn'),
  exec = require('child_process').exec;

//запускаем командную строку
gulp.task('task', function (cb) {
  var in = 'source/SG/*.doc'
  exec('mammoth source/SG/*.doc source/opt/ --output-format html', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


//запускаем локальный	 сервер
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888 
  });
  opn('http://localhost:8888');
});

//Работа с HTML
gulp.task('html', function () {
  gulp.src('source/*.html')
    .pipe(connect.reload());
});

//Работа с CSS
gulp.task('css', function () {
  gulp.src('source/style/*.css')
    .pipe(connect.reload());
});
//Работа с js
gulp.task('js', function () {
  gulp.src('source/js/*.js')
    .pipe(connect.reload());
});

//Слежка
gulp.task('watch', function () {
  gulp.watch(['source/*.html'], ['html']);
  gulp.watch(['source/style/*.css'], ['css']);
  gulp.watch(['source/js/*.js'], ['js']);
});

//дефолт задача
gulp.task('default', ['connect', 'watch'])