document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file.');
        return;
    }
    
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            displayPreview(data.data);
        } else {
            alert('Failed to parse file.');
        }
    } catch (error) {
        alert('An error occurred while uploading the file.');
    }
});

function displayPreview(data) {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.companyName}</td>
            <td>${row.contactName}</td>
            <td>${row.contactEmail}</td>
            <td>${row.contactPhone}</td>
        `;
        tableBody.appendChild(tr);
    });

    document.getElementById('previewTable').style.display = 'block';
}

document.getElementById('confirmButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/confirm', {
            method: 'POST'
        });
        const data = await response.json();
        if (data.success) {
            alert('Data successfully imported.');
            document.getElementById('previewTable').style.display = 'none';
        } else {
            alert('Failed to import data.');
        }
    } catch (error) {
        alert('An error occurred while confirming the data.');
    }
});

document.getElementById('cancelButton').addEventListener('click', () => {
    document.getElementById('previewTable').style.display = 'none';
});
