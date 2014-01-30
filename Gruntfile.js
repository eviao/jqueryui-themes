/*global module:false*/
module.exports = function(grunt) {

  var 
    createBanner = function(){
      /*
      * jQuery UI theme 2014-01-29 20:09:22
      */
      return '/*\n' + 
        '* jQuery UI theme <%= grunt.template.today("yyyy-mm-dd") %>\n' + 
        '*/';
    };


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    less: {
      base: {
        files: {
          "themes/base/css/jquery.ui.accordion.css": "themes/base/less/jquery.ui.accordion.less",
          "themes/base/css/jquery.ui.autocomplete.css": "themes/base/less/jquery.ui.autocomplete.less",
          "themes/base/css/jquery.ui.button.css": "themes/base/less/jquery.ui.button.less",
          "themes/base/css/jquery.ui.core.css": "themes/base/less/jquery.ui.core.less",
          "themes/base/css/jquery.ui.datepicker.css": "themes/base/less/jquery.ui.datepicker.less",
          "themes/base/css/jquery.ui.dialog.css": "themes/base/less/jquery.ui.dialog.less",
          "themes/base/css/jquery.ui.menu.css": "themes/base/less/jquery.ui.menu.less",
          "themes/base/css/jquery.ui.progressbar.css": "themes/base/less/jquery.ui.progressbar.less",
          "themes/base/css/jquery.ui.resizable.css": "themes/base/less/jquery.ui.resizable.less",
          "themes/base/css/jquery.ui.selectable.css": "themes/base/less/jquery.ui.selectable.less",
          "themes/base/css/jquery.ui.slider.css": "themes/base/less/jquery.ui.slider.less",
          "themes/base/css/jquery.ui.spinner.css": "themes/base/less/jquery.ui.spinner.less",
          "themes/base/css/jquery.ui.tabs.css": "themes/base/less/jquery.ui.tabs.less",
          "themes/base/css/jquery.ui.tooltip.css": "themes/base/less/jquery.ui.tooltip.less",
          "themes/base/css/jquery.ui.theme.css": "themes/base/less/jquery.ui.theme.less",

          "themes/base/css/jquery.ui.base.css": "themes/base/less/jquery.ui.base.less",
          "themes/base/css/jquery.ui.all.css": "themes/base/less/jquery.ui.all.less",
        }
      },
      default: {
        files: {
          "themes/default/css/jquery.ui.accordion.css": "themes/default/less/jquery.ui.accordion.less",
          "themes/default/css/jquery.ui.autocomplete.css": "themes/default/less/jquery.ui.autocomplete.less",
          "themes/default/css/jquery.ui.button.css": "themes/default/less/jquery.ui.button.less",
          "themes/default/css/jquery.ui.core.css": "themes/default/less/jquery.ui.core.less",
          "themes/default/css/jquery.ui.datepicker.css": "themes/default/less/jquery.ui.datepicker.less",
          "themes/default/css/jquery.ui.dialog.css": "themes/default/less/jquery.ui.dialog.less",
          "themes/default/css/jquery.ui.menu.css": "themes/default/less/jquery.ui.menu.less",
          "themes/default/css/jquery.ui.progressbar.css": "themes/default/less/jquery.ui.progressbar.less",
          "themes/default/css/jquery.ui.resizable.css": "themes/default/less/jquery.ui.resizable.less",
          "themes/default/css/jquery.ui.selectable.css": "themes/default/less/jquery.ui.selectable.less",
          "themes/default/css/jquery.ui.slider.css": "themes/default/less/jquery.ui.slider.less",
          "themes/default/css/jquery.ui.spinner.css": "themes/default/less/jquery.ui.spinner.less",
          "themes/default/css/jquery.ui.tabs.css": "themes/default/less/jquery.ui.tabs.less",
          "themes/default/css/jquery.ui.tooltip.css": "themes/default/less/jquery.ui.tooltip.less",
          "themes/default/css/jquery.ui.theme.css": "themes/default/less/jquery.ui.theme.less",

          "themes/default/css/jquery.ui.base.css": "themes/default/less/jquery.ui.base.less",
          "themes/default/css/jquery.ui.all.css": "themes/default/less/jquery.ui.all.less",
        }
      }
    },
    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['less']);

};
