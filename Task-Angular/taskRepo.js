(function () {
    var app = angular.module('taskManager');

    var TaskRepo = function ($http) {
        var db = [
            {
                name: 'task1',
                completed: false
            },
            {
                name: 'task2',
                completed: true
            }
        ];
        var get = function (id) {
            console.log('Getting tasks ');
            return db;
        };
        var save = function (task) {
            console.log('Saving ' + task.name + ' to the db.');
        }

        return {
            get: get,
            save: save
        }
    }
    app.service('TaskRepository', TaskRepo);
}())