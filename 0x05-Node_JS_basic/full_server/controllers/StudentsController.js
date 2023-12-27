// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fieldCount = await readDatabase(process.argv[2]);

      let responseMessage = 'This is the list of our students\n';

      for (const field in fieldCount) {
        if (fieldCount.hasOwnProperty(field)) {
          const { count, list } = fieldCount[field];
          responseMessage += `Number of students in ${field}: ${count}. List: ${list.join(', ')}\n`;
        }
      }

      res.status(200).send(responseMessage);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fieldCount = await readDatabase(process.argv[2]);

      const studentsInMajor = fieldCount[major] ? fieldCount[major].list : [];

      const responseMessage = `List: ${studentsInMajor.join(', ')}`;
      res.status(200).send(responseMessage);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
