// 5-http.js

const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// Function to count students (similar to 3-read_file_async.js)
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const header = lines[0].split(',');
        const students = lines.slice(1);
        const fieldCount = {};

        students.forEach(student => {
          const fields = student.split(',');
          const field = fields[header.indexOf('field')].trim();

          if (!fieldCount[field]) {
            fieldCount[field] = { count: 0, list: [] };
          }

          fieldCount[field].count += 1;
          fieldCount[field].list.push(fields[header.indexOf('firstname')].trim());
        });

        const result = {
          total: students.length,
          fieldCount: fieldCount
        };

        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Determine the URL path
  const urlPath = req.url;

  // Handle different URL paths
  if (urlPath === '/') {
    // Display "Hello Holberton School!" for the root path
    res.end('Hello Holberton School!\n');
  } else if (urlPath === '/students') {
    // Display student information for the /students path

    // Get the database file path from the command line arguments
    const databasePath = process.argv[2];

    try {
      // Count students and get the result
      const result = await countStudents(databasePath);

      // Display the message and student information
      res.end(`This is the list of our students\nNumber of students: ${result.total}\n` +
        `Number of students in CS: ${result.fieldCount.CS.count}. List: ${result.fieldCount.CS.list.join(', ')}\n` +
        `Number of students in SWE: ${result.fieldCount.SWE.count}. List: ${result.fieldCount.SWE.list.join(', ')}\n`);
    } catch (error) {
      // Handle errors
      res.end(error.message);
    }
  } else {
    // Display a 404 message for unknown paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245);

module.exports = app;

