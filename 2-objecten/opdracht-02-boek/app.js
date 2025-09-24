// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
// Het object moet de volgende properties bevatten:
// Titel: de titel van het boek (string)
// Auteur: de auteur van het boek (string)
// Uitgeverij: de uitgeverij van het boek (string)
// Jaar: het jaar van publicatie van het boek (number)
// Verkocht: aantal verkochten exemplaren (number)
// Prijs: prijs van het boek (string)
// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.
// In de theorie staat uitgelegd hoe je dit moet doen.
// Let op: in de code conventions staat dat je de code in het Engels moet schrijven
const book = {
  title: "Percy Jackson & the Olympians: The Lightning Thief",
  author: "Rick Riordan",
  publisher: "Miramax Books",
  year: 2005,
  sold: 1800000,
  price: "$16,14"
};


const output = document.querySelector(".output");



output.innerHTML = `
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <p>Publisher: ${book.publisher}</p>
  <p>Year: ${book.year}</p>
  <p>Sold: ${book.sold}</p>
  <p>Price: ${book.price}</p>
`