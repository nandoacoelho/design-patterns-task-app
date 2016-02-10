var Task = require('./task');
//var Repos = require('./repoFactory')
//var Repos = require('./repoFactoryWithCache')
var Repos = require('./repoFactory2')

var task1 = new Task(repoFactory.task.get(1);
var task2 = new Task(repoFactory.task.get(2);

task1.user = repoFactory.user.get(1);
task1.project = repoFactory.project.get(1);

task1.save();
