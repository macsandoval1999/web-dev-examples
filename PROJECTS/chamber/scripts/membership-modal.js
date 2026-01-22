// Select the elements for dialog functionality
const openButtons = document.querySelectorAll('.show-modal'); // All buttons to open the dialog.
const closeButton = document.querySelector('#close-modal'); // Button to close the dialog
const dialogBox = document.querySelector('#membership-dialog'); // The dialog element
const membershipName = document.querySelector('#membership-name'); // Element to display membership name
const membershipPrice = document.querySelector('#membership-price'); // Element to display membership price
const membershipDescription = document.querySelector('#membership-description'); // Element to display membership description
const membershipBenefits = document.querySelector('#membership-benefits'); // Element to display membership benefits
const modalHeader = document.querySelector('.modal-header'); // Modal header element



// Event listeners to handle opening and closing the dialog. Each open button will need its own event listener.
openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => {
        const dialogID = openButton.id;
        if (dialogID == 'np-modal') {
            membershipName.textContent = 'Non-Profit Membership';
            membershipPrice.textContent = 'Free';
            membershipDescription.textContent = "Our Non-Profit Membership is designed to support the organizations that strengthen our community. This level provides affordable access to the Chamber's network, resources, and promotional outlets while honoring the unique budget needs of non-profit groups. Members at this level receive visibility through our online directory, discounted event participation, and opportunities to share their initiatives with the community. Whether you're a local charity, school, church, or community program, this membership connects you with leaders, volunteers, and partners, who can help you advance your mission.";
            membershipBenefits.innerHTML = '<li>A listing in our online Chamber Directory</li><li>Access to monthly networking events</li><li>Discounted event tickets</li><li>Ability to post events on our community calendar</li><li>Access to member-only news and resources</li>';
            modalHeader.classList.remove('bronze', 'silver', 'gold');

        } else if (dialogID == 'bronze-modal') {
            membershipName.textContent = 'Bronze Membership';
            membershipPrice.textContent = '$1000/year';
            membershipDescription.textContent = "The Bronze Membership is perfect for small businesses and startups looking to establish a presence in the local business community. This level offers essential benefits that help members connect, grow, and gain visibility. Bronze members receive a basic listing in our online directory, access to networking events, and opportunities to participate in Chamber activities. It's an affordable way to start building relationships and promoting your business within the community.";
            membershipBenefits.innerHTML = '<li>All Non-Profit Benefits</li><li>Spotlight Announcement</li><li>Basic website listing with description</li><li>Social media shout-outs</li><li>Access to exclusive advertising discounts</li><li>Member-to-member discounts</li><li>Access to chamber job board postings</li>'; 
            modalHeader.classList.remove('silver', 'gold');
            modalHeader.classList.toggle('bronze');

        } else if (dialogID == 'silver-modal') {
            membershipName.textContent = 'Silver Membership';
            membershipPrice.textContent = '$2500/year';
            membershipDescription.textContent = "The Silver Membership is designed for growing businesses that want to enhance their visibility and engagement within the Chamber community. This level includes all the benefits of the Bronze Membership, plus additional perks that help members stand out. Silver members receive enhanced listings in our directory, priority access to networking events, and opportunities for greater promotional exposure. It's an excellent choice for businesses looking to expand their reach and build stronger connections.";
            membershipBenefits.innerHTML = '<li>All Bronze Benefits</li><li>Enhanced website listing with logo and photos</li><li>Priority access to networking events</li><li>Feature in Chamber newsletter</li><li>Opportunity to host a Chamber event</li><li>Access to business development workshops</li>';
            modalHeader.classList.remove('bronze', 'gold');
            modalHeader.classList.toggle('silver');

        } else if (dialogID == 'gold-modal') {
            membershipName.textContent = 'Gold Membership';
            membershipPrice.textContent = '$5000/year';
            membershipDescription.textContent = "The Gold Membership is our premier level, offering the most comprehensive benefits and highest level of visibility within the Chamber. Gold members enjoy all the advantages of the Silver Membership, plus exclusive opportunities for leadership, sponsorship, and enhanced promotional activities. This level is ideal for established businesses seeking to maximize their impact and influence in the local business community.";
            membershipBenefits.innerHTML = '<li>All Silver Benefits</li><li>Premium website listing with video and testimonials</li><li>Exclusive sponsorship opportunities</li><li>Leadership roles within the Chamber</li><li>Priority speaking opportunities at events</li><li>Customized marketing support</li>';
            modalHeader.classList.remove('bronze', 'silver');
            modalHeader.classList.toggle('gold');
        }
        dialogBox.showModal();
    });
});

// Close the dialog when the user clicks outside the dialog content. This button should work for all instances of the dialog.
closeButton.addEventListener('click', () => {
    dialogBox.close();
});