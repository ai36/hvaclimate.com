import rename from 'gulp-rename';
import replace from "gulp-replace";
import cleancss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

export const css = () => {
    return app.gulp.src(app.path.src.css, { sourcemaps: true })
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 10 versions"],
        cascade: true
    }))
    .pipe(cleancss())
    .pipe(replace(/\/\/www\.hvaclimate\.com/g, '//hvaclimate.vercel.app'))
    .pipe(replace(/\/images\//g, 'images/'))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}