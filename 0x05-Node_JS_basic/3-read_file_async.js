// 3-read_file_async.js

const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        // Split the file into lines and filter out empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');

        // Extract the header and student data
        const header = lines[0].split(',');
        const students = lines.slice(1);

        // Initialize counters for each field
        const fieldCount = {};

        // Iterate through students and count by field
        students.forEach(student => {
          const fields = student.split(',');
          const field = fields[header.indexOf('field')].trim();

          if (!fieldCount[field]) {
            fieldCount[field] = { count: 0, list: [] };
          }

          fieldCount[field].count += 1;
          fieldCount[field].list.push(fields[header.indexOf('firstname')].trim());
        });

        // Log the results
        console.log(`Number of students: ${students.length}`);
        for (const field in fieldCount) {
          const { count, list } = fieldCount[field];
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        // Reject the promise with an error if the database is not available
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
