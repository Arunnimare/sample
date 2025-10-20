// DOM Elements
const createAccountBtn = document.getElementById('createAccountBtn');
const createAccountModal = document.getElementById('createAccountModal');
const closeModalBtn = document.querySelector('.close');
const createAccountForm = document.getElementById('createAccountForm');
const accountsList = document.getElementById('accountsList');
const refreshBtn = document.getElementById('refreshBtn');
const toastContainer = document.getElementById('toastContainer');

// Event Listeners
createAccountBtn.addEventListener('click', () => createAccountModal.style.display = 'block');
closeModalBtn.addEventListener('click', () => createAccountModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === createAccountModal) {
        createAccountModal.style.display = 'none';
    }
});
createAccountForm.addEventListener('submit', handleCreateAccount);
refreshBtn.addEventListener('click', loadAccounts);

// Load accounts when page loads
document.addEventListener('DOMContentLoaded', loadAccounts);

// Functions
async function loadAccounts() {
    try {
        const response = await fetch('/api/accounts');
        const accounts = await response.json();
        displayAccounts(accounts);
        showToast('Accounts loaded successfully', 'success');
    } catch (error) {
        showToast('Failed to load accounts', 'error');
        console.error('Error loading accounts:', error);
    }
}

function displayAccounts(accounts) {
    accountsList.innerHTML = accounts.map(account => `
        <div class="account-card">
            <h3><i class="fas fa-user"></i> ${account.accountHolderName}</h3>
            <div class="account-info">
                <p><i class="fas fa-hashtag"></i> Account ID: ${account.id}</p>
                <div class="account-balance">
                    <i class="fas fa-dollar-sign"></i> ${account.balance.toFixed(2)}
                </div>
            </div>
        </div>
    `).join('');
}

async function handleCreateAccount(e) {
    e.preventDefault();
    
    const accountData = {
        accountHolderName: document.getElementById('accountHolderName').value,
        balance: parseFloat(document.getElementById('initialBalance').value)
    };

    try {
        const response = await fetch('/api/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountData)
        });

        if (response.ok) {
            showToast('Account created successfully', 'success');
            createAccountModal.style.display = 'none';
            createAccountForm.reset();
            loadAccounts();
        } else {
            throw new Error('Failed to create account');
        }
    } catch (error) {
        showToast('Failed to create account', 'error');
        console.error('Error creating account:', error);
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}