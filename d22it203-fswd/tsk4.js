const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const students = data.split('\n').map(line => line.split(','));

  const filteredStudents = students.filter(([name, cgpa]) => {
    return name.includes('MA') && parseFloat(cgpa) > 7;
  });

  console.log('Filtered Students:');
  filteredStudents.forEach(([name, cgpa]) => {
    console.log('Name:', name);
    console.log('CGPA:', cgpa);
    console.log('---');
  });
});
