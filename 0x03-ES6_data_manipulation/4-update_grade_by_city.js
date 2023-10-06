function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students in the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map over the students in the city to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding grade object in newGrades based on studentId
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If a grade object exists, use its grade; otherwise, set grade to 'N/A'
    const grade = gradeObject ? gradeObject.grade : 'N/A';

    // Return the student with the updated grade
    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
