function getListStudentIds(studentsArray) {
  // Check if the input is an array
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  // Use the map function to extract the IDs from the objects
  const studentIds = studentsArray.map((student) => student.id);
  return studentIds;
}

export default getListStudentIds;
