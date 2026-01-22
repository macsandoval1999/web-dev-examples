// Select the elements for dialog functionality
const openDialogButton = document.getElementById('openDialog'); // Button to open the dialog
const closeDialogButton = document.getElementById('closeDialog'); // Button to close the dialog
const dialogBox = document.getElementById('dialog-box'); // The dialog element itself, hidden by default

// Event listeners to handle opening and closing the dialog
openDialogButton.addEventListener('click', () => { // Open the dialog when the button is clicked
  dialogBox.showModal();
});
closeDialogButton.addEventListener('click', () => { // Close the dialog when the button is clicked
  dialogBox.close();
});