//1.afficher la valeur de l'option sélectionnée dans le select

const select = document.getElementById('genres');
const selectedOption = select.value;
console.log(selectedOption);

//2.ajouter une nouvelle option et la sélectionner par défaut :

// Create the new option element
const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.textContent = 'Classic';

// Add the new option element to the select tag
select.appendChild(newOption);

// Select the new option element
select.value = 'classic';