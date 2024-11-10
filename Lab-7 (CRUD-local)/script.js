document.addEventListener("DOMContentLoaded", () => {
    displayData();

    // Handle form submission
    document.getElementById("crudForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const index = document.getElementById("index").value;

        if (index === "") {
            addData({ name, email });
        } else {
            updateData(index, { name, email });
        }

        document.getElementById("crudForm").reset();
        displayData();
    });
});

// CRUD Functions
function addData(data) {
    const storedData = JSON.parse(localStorage.getItem("crudData")) || [];
    storedData.push(data);
    localStorage.setItem("crudData", JSON.stringify(storedData));
}

function displayData() {
    const dataList = document.getElementById("dataList");
    const storedData = JSON.parse(localStorage.getItem("crudData")) || [];
    dataList.innerHTML = "";

    storedData.forEach((data, index) => {
        const card = `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.email}</p>
                        <button class="btn btn-outline-secondary btn-sm" onclick="editData(${index})">Edit</button>
                        <button class="btn btn-secondary btn-sm" onclick="deleteData(${index})">Delete</button>
                    </div>
                </div>
            </div>`;
        dataList.insertAdjacentHTML("beforeend", card);
    });
}

function editData(index) {
    const storedData = JSON.parse(localStorage.getItem("crudData"));
    document.getElementById("name").value = storedData[index].name;
    document.getElementById("email").value = storedData[index].email;
    document.getElementById("index").value = index;
}

function updateData(index, newData) {
    const storedData = JSON.parse(localStorage.getItem("crudData"));
    storedData[index] = newData;
    localStorage.setItem("crudData", JSON.stringify(storedData));
}

function deleteData(index) {
    const storedData = JSON.parse(localStorage.getItem("crudData"));
    storedData.splice(index, 1);
    localStorage.setItem("crudData", JSON.stringify(storedData));
    displayData();
}
