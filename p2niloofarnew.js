const firstName=prompt("write your first name: ");
const lastName=prompt("write your last name: ");
const finalName= firstName +lastName;
const finallName = finalName.replace(/\s+/g, '');
const fullNameLength = finallName.length;
console.log(fullNameLength);