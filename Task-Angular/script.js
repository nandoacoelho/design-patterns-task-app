(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (TaskRepository) {
        var ctrl = this;
        ctrl.tasks = TaskRepository.get();
    }
    app.controller('TaskController', taskController);
}())