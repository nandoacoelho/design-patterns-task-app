/**
 * [Task]
 * @param {string} name - name of the Task
 * @property {boolean} completed - whether or not is completed
 */
var Task = function(name) {
    this.name = name;
    this.completed = false;
};   

Task.prototype.complete = function () {
    console.log('Compleing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('Saving Task: ' + this.name);
};

module.exports = Task;