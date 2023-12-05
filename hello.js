let uzivatele = [
    { jmeno: "Jan Nespal", email: "jan.nespal@example.com", isActive: true },
    { jmeno: "Karolina Dolezalova", email: "karolina.dolezalova@gmail.com", isActive: true },
    { jmeno: "Tom Usnul", email: "tom.usnul@example.com", isActive: true }
];

function turnOffActive(uzivatel) {
    if (uzivatel.email.includes("example.com")) {
        uzivatel.isActive = false;
    }
}

function updateStatus(uzivatele) {
    uzivatele.forEach(turnOffActive);
}

updateStatus(uzivatele);

function transformovaniUzivatelu() {
    return uzivatele.map(uzivatel => "Uživatel se jménem " + uzivatel.jmeno + " s emailem " + uzivatel.email + " je " + (uzivatel.isActive ? 'aktivní' : 'neaktivní'));
}

const transformatedUsers = transformovaniUzivatelu(uzivatele);
console.log(transformatedUsers);

function filtrovaniAktivnichUzivatelu(uzivatele) {
    return uzivatele.filter(uzivatel => uzivatel.isActive);
}

function hledaniEmailu(uzivatele, email) {
    return uzivatele.find(uzivatel => uzivatel.email === email);
}

console.log(filtrovaniAktivnichUzivatelu(uzivatele));
console.log(hledaniEmailu(uzivatele, "jan.nespal@example.com"));

function smazaniNeaktivnichUzivatelu(uzivatele) {
    return uzivatele.filter(uzivatel => uzivatel.isActive);
}

console.log(smazaniNeaktivnichUzivatelu(uzivatele));
