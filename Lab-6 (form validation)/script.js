document.getElementById("validation").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    const nameRegex = /^[A-Za-z]{2,}$/;

    if (!nameRegex.test(firstName)) {
        document.getElementById('firstName').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('firstName').classList.remove('is-invalid');
    }

    if (!nameRegex.test(lastName)) {
        document.getElementById('lastName').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('lastName').classList.remove('is-invalid');
    }

    document.getElementById("validation").classList.add('was-validated');
    alert('Form submitted successfully!');
});

const stateCities = {
    balochistan: ['Chaman', 'Dera Allah Yar', 'Gawadar', 'Quetta', 'Zhob'],
    kpk: ['Abbottabad', 'Charsadda', 'Kohat', 'Mardan', 'Peshawar'],
    punjab: ['Faisalabad', 'Jhang', 'Kasur', 'Lahore', 'Multan'],
    sindh: ['Badin', 'Dadu', 'Hyderabad', 'Karachi', 'Sukkur'],
    islamabad: ['Islamabad Capital Territory']
};

const stateSelect = document.getElementById('stateSelect');
const citySelect = document.getElementById('citySelect');

stateSelect.addEventListener('change', function() {
    const selectedState = this.value;
    citySelect.innerHTML = '<option value="" disabled selected>City</option>'; // Reset city options

    if (stateCities[selectedState]) {
        stateCities[selectedState].forEach(function(city) {
            const newOption = document.createElement('option');
            newOption.value = city.toLowerCase();
            newOption.textContent = city;
            citySelect.appendChild(newOption);
        });
    }
});

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()