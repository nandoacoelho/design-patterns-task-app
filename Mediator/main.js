var Task = require('./task');

var notificationService = function () {
    var message = 'Notifying '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }}
var loggingService = function () {
    var message = 'Logging '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }}
var auditingService = function () {
    var message = 'Auditing '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }}

/**
 * [ObserverList]
 * Object which handles with the list of observers
 * @param {array} [observerList] array which receives observers
 */
function ObserverList () {
    this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}
ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}
ObserverList.prototype.count = function () {
    return this.observerList.length;
}
ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
}
ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
}

/**
 * [ObservableTask] 
 * Object which extends Task and decorates
 * with observable pattern methods. 
 * @param {object} [data] parameters to pass through to the Task object
 * @property {object} [observers] instanciation of OberserverList
 */
var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function (observer) {
    console.log(this.observers);
    this.observers.add(observer);
}
ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}
ObservableTask.prototype.save = function () {
    this.notify(this);

    Task.prototype.save.call(this);
}
ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt( this.observers.indexOf(observer, 0) );
}

/**
 * Mediator
 */
var mediator = (function (){
    var channels = {};
    var subscribe = function (channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        })        
    }
    var publish = function (channel) {
        if (!this.channels[channel]) {
            return false
        }

        var args = Array.prototype.slice.call(arguments, 1);


        for (var i = 0; i < mediator.channels[channel].length; i++) {
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }
    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    }
}())


/****************************************/
var task1 = new ObservableTask({
        name: 'create a demo for contructors', 
        user: 'Fernando'
    });

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

console.log(' ')

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function () {
    mediator.publish('complete', this);
    console.log('this: ' + this);
    Task.prototype.complete.call();
}

task1.complete();