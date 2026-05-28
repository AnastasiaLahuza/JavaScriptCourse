function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback');

    //vars should be inside the function to be shown a the ui correctly and to make visible output form 'document.getElementById' after clickibg the submit button or "Enter"
}
    const submitButton=document.getElementById('submitBtn'); 
    submitButton.onclick = submitFeedback;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          submitFeedback();
        }
      });

// The 'Enter' key action and pressing a button in the UI are two different ways to trigger the same function (submitFeedback()), but they are not the same event.

// Pressing the Enter key:
// This happens when the user presses the Enter key on their keyboard. The event listener you added listens for this key press anywhere in the document and runs submitFeedback() when it detects Enter.

// Clicking a button in the UI:
// This usually triggers a click event on that button, which can also be programmed to call submitFeedback().

// Pressing Enter can be an alternative way to submit the feedback instead of clicking a button. Both should call the same function to handle the submission.

// The values of fields (const username) are read inside the function because you want to get the current input values exactly at the moment the user submits the feedback.
// If you put them outside the function, they would be read only once when the script loads, not reflecting any changes the user made afterward.

// Why the button element is selected outside the function:
// const submitButton = document.getElementById('submitBtn');
// You only need to get the reference to the button element once when the page loads.
// This reference is used to attach event listeners (like submitButton.addEventListener('click', submitFeedback)).
// The button element itself doesn’t change, so it's efficient to get it once outside the function.