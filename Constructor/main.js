var Task = require('./task');

var task1 = new Task('Demo 1');
var task2 = new Task('Demo 2');
var task3 = new Task('Demo 3');
var task4 = new Task('Demo 4');

task1.complete();
task2.save();
task3.save();
task4.save();


