var repoFactory = function() {
    var repos = this;
    var repoList = [{name: 'task', source: './taskRepository'},
                    {name: 'user', source: './userRepository'},
                    {name: 'project', source: './projectRepository'}];
    
    repoList.forEach(function() {
       repos[repoList.name] = require(repoList.source)()
    });
}