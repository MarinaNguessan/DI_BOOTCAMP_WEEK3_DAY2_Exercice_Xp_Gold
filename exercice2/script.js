 // Get the button and select elements
 const removeButton = document.querySelector('#removeButton');
 const colorSelect = document.querySelector('#colorSelect');

 // Add a click event listener to the button
 removeButton.addEventListener('click', removeColor);

 function removeColor() {
     // Get the selected option element
     const selectedOption = colorSelect.options[colorSelect.selectedIndex];

     // Remove the selected option element from the select element
     colorSelect.remove(colorSelect.selectedIndex);
 }