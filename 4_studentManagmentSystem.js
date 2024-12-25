// Initial array of students
const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "C" },
    { id: 4, firstName: "Alice", lastName: "Williams", age: 22, grade: "A" },
    { id: 5, firstName: "Charlie", lastName: "Brown", age: 20, grade: "B" }
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    const newStudent = { id, firstName, lastName, age, grade };
    students.push(newStudent);
    console.log(`Student ${firstName} ${lastName} added successfully.`);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
        console.log(`Student with ID ${id} updated successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with ID ${id} deleted successfully.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// d. List All Students
function listAllStudents() {
    console.log("List of all students:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    const filteredStudents = students.filter(student => student.grade === grade);
    if (filteredStudents.length > 0) {
        console.log(`Students with grade ${grade}:`);
        filteredStudents.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
        });
    } else {
        console.log(`No students found with grade ${grade}.`);
    }
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`The average age of all students is: ${averageAge.toFixed(2)}`);
}

// Testing the functions:

// Adding a new student
addStudent(6, "David", "Miller", 21, "B");

// Updating a student's information
updateStudent(2, { age: 23, grade: "A" });

// Deleting a student
deleteStudent(3);

// Listing all students
listAllStudents();

// Finding students by grade
findStudentsByGrade("B");

// Calculating the average age
calculateAverageAge();
