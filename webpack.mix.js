const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   // ChartJS
   .js('./node_modules/chart.js/dist/*.js', 'public/chart.js')
   .js('./node_modules/startbootstrap-sb-admin-2/js/sb-admin-2.js', 'public/js')
   // Bootstrap JS
   .copyDirectory('./node_modules/bootstrap/dist/js/*', 'public/bootstrap/js')
   // Font Awesome
   .copyDirectory('./node_modules/@fortawesome', 'public/')
   .sass('./node_modules/startbootstrap-sb-admin-2/scss/sb-admin-2.scss', 'public/css');
