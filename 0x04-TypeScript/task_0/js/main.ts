// task_0/js/main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  // Loop through the students and create a row for each
  studentsList.forEach(student => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();

