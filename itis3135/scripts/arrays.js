const employees = [];
const salaries = [];

function focusOnNameField() {
    const nameInput = document.getElementById('name');
    nameInput.focus();
}

window.addEventListener('load', focusOnNameField);

function addSalary() {
    const nameInput = document.getElementById('name');
    const salaryInput = document.getElementById('salary');

    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value.trim());

    if (name === '' || isNaN(salary)) {
        alert('Please enter valid name and salary.');
        return;
    }

    employees.push(name);
    salaries.push(salary);

    nameInput.value = '';
    salaryInput.value = '';

    alert(`Added ${name} with salary ${salary} to the list.`);
    populateDropdown();
    focusOnNameField();
}

function populateDropdown() {
    const dropdown = document.getElementById('employeeDropdown');
    dropdown.innerHTML = '';
  
    employees.forEach((employee, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.text = employee;
        dropdown.appendChild(option);
    });
}

window.addEventListener('load', populateDropdown);

function modifySalary() {
    const dropdown = document.getElementById('employeeDropdown');
    const selectedIndex = dropdown.selectedIndex;
    const selectedEmployee = employees[selectedIndex];

    const newSalaryInput = document.getElementById('newSalary');
    const newSalary = parseFloat(newSalaryInput.value.trim());

    if (isNaN(newSalary)) {
        alert('Please enter a valid salary.');
        return;
    }

    const index = employees.indexOf(selectedEmployee);
    if (index !== -1) {
        salaries[index] = newSalary;
        alert(`Modified ${selectedEmployee}'s salary to $${newSalary}.`);
    } else {
        alert('Employee not found.');
    }

    newSalaryInput.value = '';
}

function displayResults() {
    if (salaries.length === 0) {
        alert('No salaries to calculate.');
        return;
    }
    
    const totalSalaries = salaries.reduce((acc, curr) => acc + curr, 0);
    const averageSalary = totalSalaries / salaries.length;
    const highestSalary = Math.max(...salaries);
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    
    const heading = document.createElement('h2');
    heading.textContent = 'Salary Results';
    resultsDiv.appendChild(heading);
    
    const averageParagraph = document.createElement('p');
    averageParagraph.textContent = `Average Salary: $${averageSalary.toFixed(2)}`;
    resultsDiv.appendChild(averageParagraph);
    
    const highestParagraph = document.createElement('p');
    highestParagraph.textContent = `Highest Salary: $${highestSalary.toFixed(2)}`;
    resultsDiv.appendChild(highestParagraph);
}

function displaySalary() {
    const table = document.getElementById('results-table');
    table.innerHTML = '';

    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell();
    nameHeader.textContent = 'Employee Name';
    const salaryHeader = headerRow.insertCell();
    salaryHeader.textContent = 'Salary';

    employees.forEach((employee, index) => {
        const row = table.insertRow();
        const nameCell = row.insertCell();
        nameCell.textContent = employee;
        const salaryCell = row.insertCell();
        salaryCell.textContent = `$${salaries[index].toFixed(2)}`;
    });
}