const addEmployeesBtn = document.querySelector('#add-employees-btn');
//btn element allows the user to click the add button


const collectEmployees = function() {
  const employees = [];
  let keepAdding = true;
  //let user keep adding name if you say yes and add to list(array)

  while (keepAdding) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");
    //let the user to keep looping to same questions and adding employees until cancel button is clicked

    if (isNaN(salary)) {
      salary = 0;
    }
    //if no salary is enter then 0 will replace the salary amount

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat (salary)
  });
  //float let you enter number with decimals. create an obect
    

    keepAdding = confirm("Do you want to add another employee?");
  }
  //question to keep adding another employee

  return employees;
}
//return employee's date

  const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  const numEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  const averageSalary = totalSalary / numEmployees;
  console.log(`The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`)
}

//calculations for average employee

const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}
//random employee


/* ====================
 /* STARTER CODE
  Do not modify any of the code below this line:


/* Display employee data in an HTML table */
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);


