// Get query string from URL
const urlParams = new URLSearchParams(window.location.search);

// Extract values from query string
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const orgTitle = urlParams.get('orgTitle');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const orgName = urlParams.get('orgName');
const businessType = urlParams.get('businessType');
const businessDescription = urlParams.get('businessDescription');
const membershipLevel = urlParams.get('membershipLevel');

const timestamp = new Date(urlParams.get('timestamp'));
const formattedTimestamp = timestamp.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
});


// Populate thank you page with extracted values
document.getElementById('thank-you-message').innerHTML = `
    <h2>Thank You, ${firstName} ${lastName}!</h2>
    <br>
    <p>We have received your request for <strong>${orgName}</strong> to join the Chamber of Commerce as a <strong>${membershipLevel}</strong> member.</p>
    <p>We look forward to working with you and supporting your business in the <strong>${businessType}</strong> industry.</p>
    <br>
    <p>One of our representatives will contact you as soon as possible at <strong>${email}</strong> or <strong>${phone}</strong>.</p>
    <br>
    <div class="submitted-info">
    <h3>Submission Details:</h3>
    <br>
    <span><strong>Organization:</strong> ${orgName}</span>
    <span><strong>Industry:</strong> ${businessType}</span>
    <span><strong>Description:</strong> <br><p>${businessDescription}</p></span>
    <span><strong>Submission Date:</strong> ${formattedTimestamp}</span>
    </div>
    <br>
    <button onclick="window.location.href='index.html'">Return to Home Page</button>
`;
