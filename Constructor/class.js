'use sctrict'

/**
 *  [Task]
 *  Class which creates instanciations of Tasks
 */
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }   
    
    complete () {
        console.log('Completing Task: ' + this.name);
        this.completed = true;
    }

    save () {
        console.log('Saving Task: ' + this.name);
    }
}
