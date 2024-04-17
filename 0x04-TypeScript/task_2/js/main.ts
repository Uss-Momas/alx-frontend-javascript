interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}


class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}

interface createEmployeeInterface {
    (salary: number | string): Director | Teacher;
}

let createEmployee: createEmployeeInterface;

createEmployee = function (salary) {
    if ((typeof salary === 'number') && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

interface executeWorkInterface {
    (employee: Director | Teacher): void;
}

function isDirector(employee: Director | Teacher): boolean {
    return employee instanceof Director;
}

let executeWork: executeWorkInterface;
executeWork = function (employee) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    }
    else if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));