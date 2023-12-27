// full_server/utils.js

import { promises as fsPromises } from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(filePath, 'utf8')
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

        resolve(fieldCount);
      })
      .catch((error) => reject(error));
  });
};

export { readDatabase };
