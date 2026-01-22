// Get query string from URL
const urlParams = new URLSearchParams(window.location.search);

// Extract values from query string
const fullName = urlParams.get('fullName');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const serviceType = urlParams.get('serviceType');   
const preferredDate = urlParams.get('preferredDate');
const vehicleDetails = urlParams.get('vehicleDetails');
const extraServiceDetails = urlParams.get('extraServiceDetails');
const vehicleRelation = urlParams.get('vehicleRelation');
const vehicleID = urlParams.get('vehicleID');
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
    <h2 class="section-title">Thank You, ${fullName}!</h2>
    <br>
    <div class="thank-you-content">
        <div class="thank-you-message-text">
            <p>We have received your request for a/an <strong>${serviceType}</strong> service.</p>
            <p>We look forward to working with you and supporting your automotive needs.</p>
            <br>
            <p>One of our representatives will contact you as soon as possible at <strong>${email}</strong> or <strong>${phone}</strong>.</p>
        </div>
        <div class="submitted-info">
            <h3>Submission Details:</h3>
            <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p><strong>Personal Vehicle Details:</strong> ${vehicleDetails}</p>
            <p><strong>Extra Service Details:</strong> ${extraServiceDetails}</p>
            <p><strong>Vehicle Relation:</strong> ${vehicleRelation}</p>
            <p><strong>Vehicle ID:</strong> ${vehicleID}</p>
            <p><strong>Submission Date:</strong> ${formattedTimestamp}</p>  
        </div>
        <button onclick="window.location.href='index.html'">Return to Home Page</button>
    </div>
`;
