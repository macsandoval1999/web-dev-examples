// Select the elements for dialog functionality
const openButtons = document.querySelectorAll('.open-dialog'); // All buttons to open the dialog.
const closeButton = document.querySelector('#close-button'); // Button to close the dialog
const dialogBox = document.querySelector('#dialog-box'); // The dialog element itself, hidden by default
const dialogContent = document.querySelector('#dialog-box div'); // The content area of the dialog

// Event listeners to handle opening and closing the dialog. Each open button will need its own event listener.
openButtons.forEach((openButton) => {
  openButton.addEventListener('click', () => { 
    const dialogID = openButton.id;
    if (dialogID == 'open-button1') {
      dialogContent.textContent = 'Apples are red or green.';
    } else if (dialogID == 'open-button2') {
      dialogContent.textContent = 'Bananas are yellow.';
    } else if (dialogID == 'open-button3') {
      dialogContent.textContent = 'Carrots are orange.';
    } else if (dialogID == 'open-button4') {
      dialogContent.textContent = 'Dates are brown.';
    }
    dialogBox.showModal();
  });
});

// Close the dialog when the user clicks outside the dialog content. This button should work for all instances of the dialog.
closeButton.addEventListener('click', () => { 
  dialogBox.close();
});