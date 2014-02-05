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
    },
    widget = [
            "accordion",
            "autocomplete",
            "button",
            "core",
            "datepicker",
            "dialog",
            "menu",
            "progressbar",
            "resizable",
            "selectable",
            "slider",
            "spinner",
            "tabs",
            "tooltip",
            "theme",
            "base",
            "all"
    ],
    createFiles = function(themeName){
      if(!themeName){
        throw 'Err: Missing themeName';
      }

      var files = {};
      for(var i = 0 ; i < widget.length ; i++){
        var key = 'themes/'+themeName+'/css/jquery.ui.'+widget[i]+'.css';
        var value = 'themes/'+themeName+'/less/jquery.ui.'+widget[i]+'.less';
        files[key] = value;
      }
      return files;
    };


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    less: {
      base: {
        files: createFiles('base')
      },
      default: {
        files: createFiles('default')
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
