'use strict';
var util = require('util');
//var _ = require('lodash');
var path = require('path');
var proc = require('child_process');
var rimraf = require('rimraf');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp')
console.log('coma');

var CraftGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    var generator = this;
    this.pkg = require('../package.json');


    
  },

  prompting: function () {
    var cb = this.async();

    console.log( chalk.green(this.read('messages/_start'), {}) );

    var prompts = [
      {
        type: 'text',
        name: 'boxName',
        message: 'What is the name of the Vagrant box you wish to import?',
        default: '70kft/lamp',
      },
      {
        type: 'text',
        name: 'siteName',
        message: 'What would you like to name the site?',
        default: 'Default Site',
      },
      {
        type: 'text',
        name: 'dbHost',
        message: 'Where is your database hosted?',
        default: 'localhost'
      },
      {
        type: 'text',
        name: 'dbUser',
        message: 'What is the name of the database user?',
        default: 'root'
      },
      {
        type: 'password',
        name: 'dbPass',
        message: 'What is the database user\'s password? (default is blank)',
        default: ''
      },
      {
        type: 'text',
        name: 'dbName',
        message: 'What would you like to name the database?',
        default: 'defaultsite_dev'
      },
      {
        type: 'list',
        name: 'gridSystem',
        message: 'Which grid system would you like to use?',
        choices: [
          'toast',
          'Bootstrap Grid',
          'Jeet [http://jeet.gs/]'
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.boxName = props.boxName;
      this.siteName = props.siteName;
      this.dbHost   = props.dbHost;
      this.dbUser   = props.dbUser;
      this.dbPass   = props.dbPass;
      this.dbName   = props.dbName;
      this.gridSystem = props.gridSystem;
      this.portHost= '8080';
      this.portDb = '3306';
      cb();
    }.bind(this));
  },
  default: function(){
    var done = this.async();
    this.extract('http://buildwithcraft.com/latest.zip?accept_license=yes', './', function(err, remote) {
      if (err) {
        console.log(err);
        return false;
      } else {
         
        console.log('-----------------------------');
        console.log("Craft download completed!");
        console.log('-----------------------------');
        mkdirp.sync('craft/storage');
        proc.exec('chmod -R 774 craft');
        proc.exec('chmod -R 774 craft');
        proc.exec('chmod 774 craft/templates');
        proc.exec('chmod 774 craft/config');
        rimraf.sync('craft/config/general.php');
        rimraf.sync('craft/config/db.php');
        rimraf.sync('public');
        rimraf.sync('craft/templates');
        done();
      }

    });
  },
  
  writing: {
    craft: function () {
      

      this.fs.copy(
        this.templatePath('craft/**/.*'),
        this.destinationPath('craft')
      );
      this.fs.copy(
        this.templatePath('templates/**/*'),
        this.destinationPath('craft/templates')
      );
      this.fs.copy(
        this.templatePath('public/**/*'),
        this.destinationPath('public')
      );
      this.fs.copy(
        this.templatePath('public/**/.*'),
        this.destinationPath('public')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { siteName: this.siteName.replace(/\s+/g, '-') }
      );
      this.fs.copyTpl(
        this.templatePath('_general.php'),
        this.destinationPath('craft/config/general.php'),
        { siteName: this.siteName }
      );
      this.fs.copyTpl(
        this.templatePath('_db.php'),
        this.destinationPath('craft/config/db.php'),
        { 
          dbHost: this.dbHost,
          dbUser: this.dbUser,
          dbPass: this.dbPass,
          dbName: this.dbName
        }
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },
    installGrid: function () {
      switch(this.gridSystem) {
        case 'Toast':
          this.fs.copy(
            this.templatePath('grids/toast.scss'),
            this.destinationPath('public/src/css/sass/_grid.scss')
          );
        break;
        case 'Bootstrap':
          this.fs.copy(
            this.templatePath('grids/bootstrap.scss'),
            this.destinationPath('public/src/css/sass/_grid.scss')
          );
        break;
        case 'Jeet [http://jeet.gs/]':
          this.fs.copy(
            this.templatePath('grids/jeet.scss'),
            this.destinationPath('public/src/css/sass/_grid.scss')
          );
        break;
      }
    },
    preVagrant: function () {
      this.fs.copy(
        this.templatePath('tmp/vhost.conf'),
        this.destinationPath('vhost.conf')
      );
      this.fs.copyTpl(
        this.templatePath('tmp/setup.sh'),
        this.destinationPath('setup.sh'),
        { dbName: this.dbName }
      );
    },
    vagrant: function () {
      var generator = this;
      var done = this.async();
      proc.exec('vagrant box list --machine-readable', function (error, stdout, stderr) {
        if( stdout.indexOf(generator.boxName) != -1) {
          // The box exists. run `vagrant init` for this box.
          console.log('has box');
          generator.log('Cloning this Vagrant box: %s', generator.boxName);
          proc.exec('vagrant init ' + generator.boxName, function (error, stdout, stderr) {
            generator.log('Cloning the Vagrant box. This could take a while...');
            proc.exec('vagrant up --machine-readable', function (error, stdout, stderr) {
              generator.log('Running some commands to set up the box...');
              proc.exec('vagrant ssh --machine-readable -c "sh /vagrant/setup.sh"', function (error, stdout, stderr) {
                var done2 = generator.async();
                proc.exec('vagrant port --guest 80', function (error, stdout, stderr) {
                  if(stdout) {
                    generator.portHost = stdout.replace(/(\r\n|\n|\r)/gm,'');
                    done2();
                  }
                  else {
                    return false;
                    this.log(chalk.red(error));
                  }
                });
                proc.exec('vagrant port --guest 3306', function (error, stdout, stderr) {
                  if(stdout) {
                    generator.portDb = stdout.replace(/(\r\n|\n|\r)/gm,'');
                    done();
                  }
                  else {
                    return false;
                    this.log(chalk.red(error));
                  }
                });
                
              });
            });
          });
        }
        else {
          return false;
          this.log(chalk.red('ERROR: Box %s does not exist'), generator.boxName);
        }
      });
    },
    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copyTpl(
        this.templatePath('_config.js'),
        this.destinationPath('config.js'),
        { 
          portHost: this.portHost
        }
      );
      this.fs.copyTpl(
        this.templatePath('messages/_finish'),
        this.destinationPath('finish'),
        { 
          portHost: this.portHost,
          portDb: this.portDb
        }
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  end : { // end priority
    
    clean : function() {
      this.log('Cleaning up...');
      rimraf.sync('vhost.conf');
      //rimraf.sync('setup.sh');
    },
    finish : function () {
      var done = this.async();
      var generator = this;
      if (!this.options['skip-install']) {
        this.installDependencies({
          callback : function () {
            proc.exec('gulp', function (error, stdout, stderr) {
              console.log( chalk.green(generator.fs.read('finish'), {}) );  
            });
          }
        });
      }
      else {
        proc.exec('gulp', function (error, stdout, stderr) {
          console.log( chalk.green(generator.fs.read('finish'), {}) ); 
        });  
      }
      done();
      rimraf.sync('finish');
    }
  }
});

module.exports = CraftGenerator;