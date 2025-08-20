const companies = [];

function addCompany() {
    const name = document.getElementById('companyName').value;
    const address = document.getElementById('companyAddress').value;
    const phone = document.getElementById('companyPhone').value;
    const email = document.getElementById('companyEmail').value;

    if (name && address && phone && email) {
        companies.push({ name, address, phone, email });
        alert('Empresa adicionada com sucesso!');
        clearCompanyInputs();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function clearCompanyInputs() {
    document.getElementById('companyName').value = '';
    document.getElementById('companyAddress').value = '';
    document.getElementById('companyPhone').value = '';
    document.getElementById('companyEmail').value = '';
}

function addLead(columnId, leadName) {
    const column = document.getElementById(columnId);
    const leadCard = document.createElement('div');
    leadCard.className = 'kanban-card';
    leadCard.innerText = leadName;
    column.appendChild(leadCard);
}

// Exemplo de leads
addLead('newLeads', 'Lead 1 - São Sebastião');
addLead('newLeads', 'Lead 2 - Bertioga');
