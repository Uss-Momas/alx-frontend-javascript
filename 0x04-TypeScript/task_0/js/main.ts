interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "ussumane",
    lastName: "Momade",
    age: 24,
    location: "Address"
}
const student2 = {
    firstName: "Abdul",
    lastName: "Cadre",
    age: 24,
    location: "Mall"
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const trow = document.createElement('tr');

const firstNameCol = document.createElement('th');
const locationCol = document.createElement('th');

firstNameCol.textContent = "Firstname";
locationCol.textContent = "Location";

trow.appendChild(firstNameCol);
trow.appendChild(locationCol);
tbody.appendChild(trow);
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const studentNameElement = document.createElement('td');
    const studentLocationElement = document.createElement('td');
    studentNameElement.textContent = student.firstName;
    studentLocationElement.textContent = student.location;

    row.appendChild(studentNameElement);
    row.appendChild(studentLocationElement);
    tbody.appendChild(row);
});
table.appendChild(tbody);


document.body.appendChild(table);
