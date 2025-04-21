import minify from 'gulp-minify';
import replace from "gulp-replace";
 
export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(replace(/\/\/www\.hvaclimate\.com/g, '//agamalabs.com/sites/hvaclimate.com'))
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true,
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}