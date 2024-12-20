function showTab(index) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab, i) => {
        tab.style.display = i === index ? 'block' : 'none';
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });
}

function filterTable(input) {
    const filter = input.value.toLowerCase();
    const rows = input.closest('.tab-content').querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.style.display = Array.from(row.cells).some(cell =>
            cell.innerText.toLowerCase().includes(filter)
        ) ? '' : 'none';
    });
}

function sortTable(header, columnIndex) {
    const table = header.closest('table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText.toLowerCase();
        const bText = b.cells[columnIndex].innerText.toLowerCase();
        return aText.localeCompare(bText);
    });
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
}
