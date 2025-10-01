fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then(response => response.json())
    .then(countries => {
        const grid = document.getElementById('countries-grid');
        countries.forEach(country => {
            if (country.flags && country.flags.png && country.name && country.name.common) {
                const card = document.createElement('div');
                card.className = 'country-card';
                card.innerHTML = `
          <img src="${country.flags.png}" alt="Vlag van ${country.name.common}">
          <h2>${country.name.common}</h2>
        `;
                grid.appendChild(card);
            }
        });
    })
    .catch(error => {
        console.error('Fout bij het laden van landen:', error);
    });