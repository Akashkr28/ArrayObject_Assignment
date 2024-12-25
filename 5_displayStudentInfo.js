// Student object
const student = {
    name: "Alice",
    age: 22,
    major: 'Computer Science',
    GPA: 3.8,
    isEnrolled: true
};

// Function to display student info
function displayStudentInfo(student) {
    // Use 'for...in' loop to iterate over the student object properties
    for (let key in student) {
        // Print each property and its corresponding value in the specified format
        console.log(`Property: ${key}, Value: ${student[key]}`);
    }
}

// Call the function to display student info
displayStudentInfo(student);
