// 1. Vytvoření uživatelů
let users = [
    { name: 'John Doe', email: 'john@example.com', isActive: true },
    { name: 'Jane Doe', email: 'jane@example.com', isActive: true },
    { name: 'Bob Smith', email: 'bob@test.com', isActive: true }
];

// Funkce pro přepnutí stavu isActive na false pro uživatele s doménou @example.com
function deactivateUsersWithExampleDomain(user) {
    if (user.email.includes('@example.com')) {
        user.isActive = false;
    }
}

// Funkce pro aktualizaci stavu isActive pro všechny uživatele
function updateUsersStatus(users) {
    users.forEach(deactivateUsersWithExampleDomain);
}

updateUsersStatus(users);

// 2. Vypsání uživatelů
function formatUsers(users) {
    return users.map(user => `Uživatel ${user.name} s e-mailem ${user.email} je aktuálně ${user.isActive ? 'aktivní' : 'neaktivní'}`);
}

let formattedUsers = formatUsers(users);
console.log(formattedUsers);

// 3. Filtrace a vyhledávání
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

function findUserByEmail(email, users) {
    return users.find(user => user.email === email);
}

let activeUsers = filterActiveUsers(users);
console.log(activeUsers);

let foundUser = findUserByEmail('jane@example.com', users);
console.log(foundUser);

// 4. Smazání neaktivních uživatelů
function deleteInactiveUsers(users) {
    return users.filter(user => user.isActive);
}

users = deleteInactiveUsers(users);
console.log(users);
