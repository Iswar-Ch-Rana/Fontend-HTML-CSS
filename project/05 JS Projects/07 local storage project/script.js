// Get form elements
const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const storageTypeSelect = document.getElementById('storageTypeSelect');

// console.info(storageTypeSelect.innerText);

// Get output containers
const localStorageOutput = document.querySelector('#local');
const sessionStorageOutput = document.querySelector('#session');

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

//  Dark mode event listener
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// TODO: Form submission event handler
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        storageType: storageTypeSelect.value
    };

    // Store data in the selected storage type
    const storage = formData.storageType === 'local storage' ? localStorage : sessionStorage;
    const existingData = JSON.parse(storage.getItem('formData') || '[]');
    existingData.push(formData);
    storage.setItem('formData', JSON.stringify(existingData));

    // Clear form inputs
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    displayStoredData();
});

// TODO: Display stored data
function displayStoredData() {
    const localStorageData = JSON.parse(localStorage.getItem('formData') || '[]');
    const sessionStorageData = JSON.parse(sessionStorage.getItem('formData') || '[]');

    localStorageOutput.innerHTML = '';
    sessionStorageOutput.innerHTML = '';

    localStorageData.forEach((data, index) => {
        const formattedData = JSON.stringify(data, null, 2);
        // console.log(formattedData);
        localStorageOutput.innerHTML += `<div><pre>${formattedData}</pre><div class="btn-group"><button class="update btn" onclick="updateData('localStorage', ${index})">Update</button><button class="delete btn" onclick="deleteData('localStorage', ${index})">Delete</button></div></div>`;
    });

    sessionStorageData.forEach((data, index) => {
        const formattedData = JSON.stringify(data, null, 2);
        sessionStorageOutput.innerHTML += `<div><pre>${formattedData}</pre><div class="btn-group"><button class="update btn" onclick="updateData('sessionStorage', ${index})">Update</button><button class="delete btn" onclick="deleteData('sessionStorage', ${index})">Delete</button></div></div>`;
    });
}

// TODO: Update data
function updateData(storageType, index) {
    const storage = storageType === 'localStorage' ? localStorage : sessionStorage;
    const existingData = JSON.parse(storage.getItem('formData') || '[]');
    const updatedData = existingData[index];

    // Populate form inputs with the data to be updated
    firstNameInput.value = updatedData.firstName;
    lastNameInput.value = updatedData.lastName;
    emailInput.value = updatedData.email;
    phoneInput.value = updatedData.phone;
    storageTypeSelect.value = updatedData.storageType;

    // Remove the data from storage
    existingData.splice(index, 1);
    storage.setItem('formData', JSON.stringify(existingData));

    displayStoredData();
}

// TODO: Function to delete data
function deleteData(storageType, index) {
    const storage = storageType === 'localStorage' ? localStorage : sessionStorage;
    const existingData = JSON.parse(storage.getItem('formData') || '[]');
    existingData.splice(index, 1);
    storage.setItem('formData', JSON.stringify(existingData));
    displayStoredData();
}

// TODO: Display stored data on page load
displayStoredData();

