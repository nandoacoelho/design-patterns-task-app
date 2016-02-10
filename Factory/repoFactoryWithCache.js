var repoFactory = function () {
    this.getRepo = function (repoType) {
        switch (repoType) {
        case 'task':
            if (this.taskRepo) {
                return taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
            }
            break;
        case 'user':
            if (this.userRepo) {
                return userRepo;
            } else {
                this.userRepo = require('./userRepository')();
            }
            break;
        case 'project':
            if (this.projectRepo) {
                return projectRepo;
            } else {
                this.projectRepo = require('./projectRepository')();
            }
            break;
        }
    }
}

module.exports = new repoFactory;