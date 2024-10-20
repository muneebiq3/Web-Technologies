document.getElementById("validation").addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    const nameRegex = /^[A-Za-z]{2,}$/;

    if (!nameRegex.test(firstName)) {
        displayError("First name must contain only letters and be at least 2 characters long.");
        return;
    }

    if (!nameRegex.test(lastName)) {
        displayError("Last name must contain only letters and be at least 2 characters long.");
        return;
    }

    alert('Form submitted successfully!');

});

function displayError(message) {

    alert(message);

}

const stateCities = {
    balochistan: ['Chaman', 'Dera Allah Yar', 'Gawadar', 'Quetta', 'Zhob'],
    kpk: ['Abbottabad', 'Charsadda', 'Kohat', 'Mardan', 'Peshawar'],
    punjab: ['Faisalabad', 'Jhang', 'Kasur', 'Lahore', 'Multan'],
    sindh: ['Badin', 'Dadu', 'Hyderabad', 'Karachi', 'Sukkur',],
    islamabad: ['Islamabad Capital Territory']
}

const stateSelect = document.getElementById('stateSelect');
const citySelect = document.getElementById('citySelect');

stateSelect.addEventListener('change', function() {

    const selectedState = this.value;

    citySelect.innerHTML = '<option value="" disabled>City</option>';

    if (stateCities[selectedState]) {

        stateCities[selectedState].forEach(function(city) {

            const newOption = document.createElement('option');
            newOption.value = city.toLowerCase();
            newOption.textContent = city;

            citySelect.appendChild(newOption);
        });

    }

});