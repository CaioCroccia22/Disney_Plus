const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function styles(){
    //Busca os arquivos
    return gulp.src('./src/styles/*.scss')
        //Realiza a compilação dos arquivos sass de modo comprimido
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //Seleciona a pasta destino dos arquivos comprimidos
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    //Busca os arquivos
    return gulp.src('./src/img/**/*')
        //Realiza a compilação dos arquivos
        .pipe(imagemin())
        //Seleciona a pasta destino dos arquivos comprimidos
        .pipe(gulp.dest('./dist/img'));
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}

