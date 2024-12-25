// a) Create the student object and prevent extensions
const student = {
    name: "John",
    age: 20
};
  
Object.preventExtensions(student);
  
// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);
  
// c) Create the teacher object with a 'subject' property
const teacher = {
    subject: "Math"
};
  
// d) Seal the teacher object, preventing additions or deletions of properties
Object.seal(teacher);
  
// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);
  
// f) Print the extensibleStatus and sealedStatus to the console
console.log("Is student object extensible?", extensibleStatus); // false
console.log("Is teacher object sealed?", sealedStatus); // true