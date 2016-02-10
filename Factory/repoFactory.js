var repoFactory = function () {
    this.getRepo = function (repoType) {
        switch (repoType) {
            case 'task':
                var taskRepo = require('./taskRepository')();
                return taskRepo;
                break;
            case 'user':
                var userRepo = require('./userRepository')();
                return userRepo;
                break;
            case 'project':
                var projectRepo = require('./projectRepository')();
                return projectRepo;
                break;
        }
    }
}

module.exports = new repoFactory;