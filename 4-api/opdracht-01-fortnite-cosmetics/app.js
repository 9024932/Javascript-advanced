const grid = document.getElementById("cosmeticsGrid");

// Gebruik lokale JSON in plaats van externe API
fetch("./fortnite.json")
  .then(res => res.json())
  .then(data => {
    // Controleer of er data is
    if (!data || !data.data || !data.data.items || !data.data.items.br) return;

    grid.innerHTML = ""; // leeg grid
    data.data.items.br.forEach(item => {
      // Kies de beste beschikbare afbeelding
      const imgSrc = item.images.icon || item.images.smallIcon || "";
      grid.innerHTML += `
        <div class="cosmetic-card">
          <img src="${imgSrc}" alt="${item.name}" class="cosmetic-img">
          <div class="cosmetic-name">${item.name}</div>
        </div>
      `;
    });
  })
  .catch(err => {
    grid.innerHTML = "<p>Kan cosmetics niet laden.</p>";
    console.error(err);
  });
