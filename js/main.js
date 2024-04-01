// Navbar
// Gets the Mobile Nav icon by its ID
let bars = document.getElementById('bars');

// Gets the Mobile Nav container
let mobileMenu = document.getElementById('mobileMenu');

// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener('click', function(){
  mobileMenu.classList.toggle('show');
  bars.classList.toggle('fa-times');
});









// Function to search data based on ID
function search() {
    const searchInput = document.getElementById('searchInput').value;
    Papa.parse('data.csv', {
        download: true,
        complete: function(results) {
            const data = results.data;
            const headers = data[0];
            const index = headers.indexOf('id');
            if (index !== -1) {
                let found = false;
                let rowData = '';
                for (let i = 1; i < data.length; i++) {
                    if (data[i][index] === searchInput) {
                        found = true;
                        rowData = data[i];
                        break;
                    }
                }
                if (found) {
                    displayData(rowData, headers);
                } else {
                    displayMessage('ID not found.');
                }
            } else {
                displayMessage('ID column not found.');
            }
        }
    });
}

// Function to display data
function displayData(data, headers) {
    const idIndex = headers.indexOf('id');
    const nameIndex = headers.indexOf('name');
    const marksIndex = headers.indexOf('marks');
    const ageIndex = headers.indexOf('age');

    const id = data[idIndex];
    const name = data[nameIndex];
    const marks = data[marksIndex];
    const age = data[ageIndex];

    document.getElementById('idOutput').innerHTML = `<h1>ID: ${id}</h1>`;
    document.getElementById('nameOutput').innerHTML = `<h1>Name: ${name}</h1>`;
    document.getElementById('marksOutput').innerHTML = `<h1>Marks: ${marks}</h1>`;
    document.getElementById('ageOutput').innerHTML = `<h1>Age: ${age}</h1>`;
}

// Function to display message
function displayMessage(message) {
    document.getElementById('output').innerHTML = `<p>${message}</p>`;
}



function printData(){
    window.print();
}