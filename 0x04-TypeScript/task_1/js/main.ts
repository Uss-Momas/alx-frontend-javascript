interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = function (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17