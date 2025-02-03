const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function styles(){
    //Busca os arquivos
    return gulp.src('./src/styles/*.scss')
        //Realiza a compilação dos arquivos sass de modo comprimido
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //Seleciona a pasta destino dos arquivos comprimidos
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

