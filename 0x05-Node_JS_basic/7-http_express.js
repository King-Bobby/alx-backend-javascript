const express = require('express');
const fs = require('fs').promises;

// Create an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Respond with the message
  res.send('Hello Holberton School!\n');
});

// Define a route for '/students'
app.get('/students', async (req, res) => {
  try {
    // Read the database file asynchronously
    const data = await fs.readFile(process.argv[2], 'utf8');

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

    // Build the response message
    let responseMessage = 'This is the list of our students\n';
    responseMessage += `Number of students: ${students.length}\n`;

    for (const field in fieldCount) {
      if (fieldCount.hasOwnProperty(field)) {
        const { count, list } = fieldCount[field];
        responseMessage += `Number of students in ${field}: ${count}. List: ${list.join(', ')}\n`;
      }
    }

    // Respond with the message
    res.send(responseMessage);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable
module.exports = app;
