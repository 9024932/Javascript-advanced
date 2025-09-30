const buttonClear = document.querySelector(".clear-button");
const birthdayContainer = document.querySelector('.birthday');
const amountPeople = document.querySelector("AmountofPeople");


fetch("./birthday.json")
.then((response) => response.json())
.then((birthday) => {
    buttonClear.addEventListener('click', function(){
        birthdayContainer.innerHTML = "";
        amountPeople.innerHTML = `<h2>0 verjaardagen vandaag</h2>`;
    });

    for (let mensen of birthday) {
        birthdayContainer.innerHTML += `
            <h2>naam: ${mensen.name}</h2>
            <p>leeftijd: ${mensen.age}</p>
            <img class="image" src="${mensen.image}">
        `;
    }
});
