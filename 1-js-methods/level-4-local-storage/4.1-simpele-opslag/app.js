// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // Haal naam uit input veld
    const naam = document.getElementById('naam-input').value;
    
    // Check of naam niet leeg is
    if (!naam) {
        alert('Voer eerst een naam in!');   
        return;
    }
    
    // Sla naam op in localStorage
    localStorage.setItem('opgeslagenNaam', naam);
    
    // Toon welkomstbericht
    toonWelkom();
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // Haal naam op uit localStorage
    const opgeslagenNaam = localStorage.getItem('opgeslagenNaam');
    console.log('Opgeslagen naam:', opgeslagenNaam);
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // Toon juiste bericht
    if (opgeslagenNaam) {
        welkomElement.textContent = `Welkom terug, ${opgeslagenNaam}!`;
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    // Verwijder naam uit localStorage
    localStorage.removeItem('opgeslagenNaam');
    toonWelkom();
}

// Roep toonWelkom() aan bij pagina laden
window.onload = toonWelkom;