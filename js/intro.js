let yearOfBirth = 2009;

function calculateAge(currentYear, yearOfBirth) {
  let age = currentYear - yearOfBirth;

  if (age > 0) return age;
  else return 0;
}

function canDrive(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let age = calculateAge(2025, 2005);
let canDriveStatus = canDrive(age);

console.log({ age, canDriveStatus });
